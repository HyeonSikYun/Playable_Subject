using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	public GameObject[] itemPrefabs;

	public Transform gridParent;

	public float swapDuration = 0.3f;

	public float destroyDuration = 0.5f;

	public float refillDuration = 0.4f;

	public float shuffleDuration = 0.8f;

	private bool isAnimating = false;

	private GameObject[,] board = new GameObject[3, 3];

	private ItemCell firstSelected = null;

	private void Start()
	{
		GenerateBoard();
	}

	private void GenerateBoard()
	{
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				Vector3 pos = new Vector3((x - 1) * 3, (y - 1) * 3, 15f);
				int itemId = GetSafeItemId(x, y);
				GameObject go = Object.Instantiate(itemPrefabs[itemId], pos, Quaternion.identity, gridParent);
				ItemCell cell = go.AddComponent<ItemCell>();
				cell.Init(x, y, itemId, this);
				board[x, y] = go;
			}
		}
	}

	private int GetSafeItemId(int x, int y)
	{
		List<int> forbiddenIds = new List<int>();
		if (x >= 2 && GetItemIdSafe(x - 1, y) == GetItemIdSafe(x - 2, y))
		{
			forbiddenIds.Add(GetItemIdSafe(x - 1, y));
		}
		if (y >= 2 && GetItemIdSafe(x, y - 1) == GetItemIdSafe(x, y - 2))
		{
			forbiddenIds.Add(GetItemIdSafe(x, y - 1));
		}
		int itemId;
		do
		{
			itemId = Random.Range(0, itemPrefabs.Length);
		}
		while (forbiddenIds.Contains(itemId));
		return itemId;
	}

	private int GetItemIdSafe(int x, int y)
	{
		if (board[x, y] == null)
		{
			return -1;
		}
		ItemCell cell = board[x, y].GetComponent<ItemCell>();
		return (cell != null) ? cell.itemId : (-1);
	}

	public void OnItemSelected(ItemCell selected)
	{
		if (!isAnimating)
		{
			if (firstSelected == null)
			{
				firstSelected = selected;
				firstSelected.Highlight(true);
			}
			else if (IsAdjacent(firstSelected, selected))
			{
				firstSelected.Highlight(false);
				StartCoroutine(TrySwap(firstSelected, selected));
				firstSelected = null;
			}
			else
			{
				firstSelected.Highlight(false);
				firstSelected = selected;
				firstSelected.Highlight(true);
			}
		}
	}

	private bool IsAdjacent(ItemCell a, ItemCell b)
	{
		int dx = Mathf.Abs(a.x - b.x);
		int dy = Mathf.Abs(a.y - b.y);
		return dx + dy == 1;
	}

	private IEnumerator TrySwap(ItemCell a, ItemCell b)
	{
		isAnimating = true;
		yield return StartCoroutine(SwapItemsAnimated(a, b));
		if (CheckMatches())
		{
			Debug.Log("\ud83c\udf89 매치 성공!");
			yield return StartCoroutine(DestroyMatchedItems());
			yield return StartCoroutine(RefillBoardAnimated());
			if (!HasPossibleMoves())
			{
				yield return StartCoroutine(ShowShuffleMessage());
				yield return StartCoroutine(ShuffleBoard());
			}
		}
		else
		{
			Debug.Log("❌ 매치 실패 - 되돌리기");
			yield return StartCoroutine(SwapItemsAnimated(a, b));
		}
		isAnimating = false;
	}

	private IEnumerator SwapItemsAnimated(ItemCell a, ItemCell b)
	{
		Vector3 startPosA = a.transform.position;
		Vector3 startPosB = b.transform.position;
		float elapsed = 0f;
		while (elapsed < swapDuration)
		{
			elapsed += Time.deltaTime;
			float t2 = elapsed / swapDuration;
			t2 = Mathf.SmoothStep(0f, 1f, t2);
			a.transform.position = Vector3.Lerp(startPosA, startPosB, t2);
			b.transform.position = Vector3.Lerp(startPosB, startPosA, t2);
			yield return null;
		}
		a.transform.position = startPosB;
		b.transform.position = startPosA;
		SwapBoardData(a, b);
	}

	private void SwapBoardData(ItemCell a, ItemCell b)
	{
		board[a.x, a.y] = b.gameObject;
		board[b.x, b.y] = a.gameObject;
		int tempX = a.x;
		int tempY = a.y;
		a.SetPosition(b.x, b.y);
		b.SetPosition(tempX, tempY);
	}

	private bool CheckMatches()
	{
		bool matchFound = false;
		for (int y = 0; y < 3; y++)
		{
			if (GetItemId(0, y) == GetItemId(1, y) && GetItemId(1, y) == GetItemId(2, y))
			{
				matchFound = true;
				break;
			}
		}
		if (!matchFound)
		{
			for (int x = 0; x < 3; x++)
			{
				if (GetItemId(x, 0) == GetItemId(x, 1) && GetItemId(x, 1) == GetItemId(x, 2))
				{
					matchFound = true;
					break;
				}
			}
		}
		return matchFound;
	}

	private IEnumerator DestroyMatchedItems()
	{
		List<GameObject> toDestroy = new List<GameObject>();
		for (int y = 0; y < 3; y++)
		{
			if (GetItemId(0, y) == GetItemId(1, y) && GetItemId(1, y) == GetItemId(2, y))
			{
				toDestroy.Add(board[0, y]);
				toDestroy.Add(board[1, y]);
				toDestroy.Add(board[2, y]);
			}
		}
		for (int x = 0; x < 3; x++)
		{
			if (GetItemId(x, 0) == GetItemId(x, 1) && GetItemId(x, 1) == GetItemId(x, 2))
			{
				toDestroy.Add(board[x, 0]);
				toDestroy.Add(board[x, 1]);
				toDestroy.Add(board[x, 2]);
			}
		}
		float elapsed = 0f;
		Vector3[] originalScales = new Vector3[toDestroy.Count];
		for (int j = 0; j < toDestroy.Count; j++)
		{
			if (toDestroy[j] != null)
			{
				originalScales[j] = toDestroy[j].transform.localScale;
			}
		}
		while (elapsed < destroyDuration)
		{
			elapsed += Time.deltaTime;
			float t = elapsed / destroyDuration;
			for (int i = 0; i < toDestroy.Count; i++)
			{
				if (toDestroy[i] != null)
				{
					toDestroy[i].transform.localScale = Vector3.Lerp(originalScales[i], Vector3.zero, t);
					Renderer renderer = toDestroy[i].GetComponent<Renderer>();
					if (renderer != null)
					{
						Color color = renderer.material.color;
						color.a = Mathf.Lerp(1f, 0f, t);
						renderer.material.color = color;
					}
				}
			}
			yield return null;
		}
		foreach (GameObject obj in toDestroy)
		{
			if (obj != null)
			{
				ItemCell cell = obj.GetComponent<ItemCell>();
				board[cell.x, cell.y] = null;
				Object.Destroy(obj);
			}
		}
	}

	private IEnumerator RefillBoardAnimated()
	{
		List<GameObject> newItems = new List<GameObject>();
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (board[x, y] == null)
				{
					Vector3 targetPos = new Vector3((x - 1) * 3, (y - 1) * 3, 15f);
					Vector3 startPos = new Vector3(targetPos.x, targetPos.y + 9f, targetPos.z);
					int itemId = GetSafeItemId(x, y);
					GameObject go = Object.Instantiate(itemPrefabs[itemId], startPos, Quaternion.identity, gridParent);
					ItemCell cell = go.AddComponent<ItemCell>();
					cell.Init(x, y, itemId, this);
					board[x, y] = go;
					newItems.Add(go);
				}
			}
		}
		float elapsed = 0f;
		Vector3[] startPositions = new Vector3[newItems.Count];
		Vector3[] targetPositions = new Vector3[newItems.Count];
		for (int k = 0; k < newItems.Count; k++)
		{
			startPositions[k] = newItems[k].transform.position;
			ItemCell cell2 = newItems[k].GetComponent<ItemCell>();
			targetPositions[k] = new Vector3((cell2.x - 1) * 3, (cell2.y - 1) * 3, 15f);
		}
		while (elapsed < refillDuration)
		{
			elapsed += Time.deltaTime;
			float t2 = elapsed / refillDuration;
			t2 = Mathf.SmoothStep(0f, 1f, t2);
			for (int i = 0; i < newItems.Count; i++)
			{
				if (newItems[i] != null)
				{
					newItems[i].transform.position = Vector3.Lerp(startPositions[i], targetPositions[i], t2);
				}
			}
			yield return null;
		}
		for (int j = 0; j < newItems.Count; j++)
		{
			if (newItems[j] != null)
			{
				newItems[j].transform.position = targetPositions[j];
			}
		}
		if (CheckMatches())
		{
			Debug.Log("\ud83c\udf89 연속 매치!");
			yield return StartCoroutine(DestroyMatchedItems());
			yield return StartCoroutine(RefillBoardAnimated());
		}
		if (!HasPossibleMoves())
		{
			yield return StartCoroutine(ShowShuffleMessage());
			yield return StartCoroutine(ShuffleBoard());
		}
	}

	private bool HasPossibleMoves()
	{
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (x < 2 && WouldCreateMatch(x, y, x + 1, y))
				{
					return true;
				}
				if (y < 2 && WouldCreateMatch(x, y, x, y + 1))
				{
					return true;
				}
			}
		}
		return false;
	}

	private bool WouldCreateMatch(int x1, int y1, int x2, int y2)
	{
		int item1 = GetItemId(x1, y1);
		int item2 = GetItemId(x2, y2);
		int[,] tempBoard = new int[3, 3];
		for (int y3 = 0; y3 < 3; y3++)
		{
			for (int x3 = 0; x3 < 3; x3++)
			{
				tempBoard[x3, y3] = GetItemId(x3, y3);
			}
		}
		tempBoard[x1, y1] = item2;
		tempBoard[x2, y2] = item1;
		for (int y4 = 0; y4 < 3; y4++)
		{
			if (tempBoard[0, y4] == tempBoard[1, y4] && tempBoard[1, y4] == tempBoard[2, y4])
			{
				return true;
			}
		}
		for (int x4 = 0; x4 < 3; x4++)
		{
			if (tempBoard[x4, 0] == tempBoard[x4, 1] && tempBoard[x4, 1] == tempBoard[x4, 2])
			{
				return true;
			}
		}
		return false;
	}

	private IEnumerator ShowShuffleMessage()
	{
		Debug.Log("\ud83d\udd04 가능한 움직임이 없습니다! 자동 셔플 중...");
		yield return new WaitForSeconds(1.5f);
	}

	private IEnumerator ShuffleBoard()
	{
		Debug.Log("\ud83c\udfb2 셔플 시작!");
		List<int> itemIds = new List<int>();
		List<GameObject> items = new List<GameObject>();
		for (int y2 = 0; y2 < 3; y2++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (board[x, y2] != null)
				{
					itemIds.Add(GetItemId(x, y2));
					items.Add(board[x, y2]);
				}
			}
		}
		Vector3 centerPos = new Vector3(0f, 0f, 15f);
		float elapsed2 = 0f;
		Vector3[] startPositions = new Vector3[items.Count];
		for (int l = 0; l < items.Count; l++)
		{
			startPositions[l] = items[l].transform.position;
		}
		while (elapsed2 < shuffleDuration * 0.4f)
		{
			elapsed2 += Time.deltaTime;
			float t = elapsed2 / (shuffleDuration * 0.4f);
			for (int i = 0; i < items.Count; i++)
			{
				if (items[i] != null)
				{
					Vector3 randomOffset = new Vector3(Random.Range(-0.5f, 0.5f), Random.Range(-0.5f, 0.5f), 0f);
					items[i].transform.position = Vector3.Lerp(startPositions[i], centerPos + randomOffset, t);
					items[i].transform.rotation = Quaternion.Euler(0f, 0f, (float)Random.Range(0, 360) * t);
				}
			}
			yield return null;
		}
		int[,] shuffledBoard = GenerateShuffledBoard();
		elapsed2 = 0f;
		Vector3[] targetPositions = new Vector3[items.Count];
		int itemIndex = 0;
		for (int y = 0; y < 3; y++)
		{
			for (int x2 = 0; x2 < 3; x2++)
			{
				if (itemIndex < items.Count)
				{
					targetPositions[itemIndex] = new Vector3((x2 - 1) * 3, (y - 1) * 3, 15f);
					Object.Destroy(items[itemIndex]);
					GameObject newItem = Object.Instantiate(itemPrefabs[shuffledBoard[x2, y]], centerPos, Quaternion.identity, gridParent);
					ItemCell newCell = newItem.AddComponent<ItemCell>();
					newCell.Init(x2, y, shuffledBoard[x2, y], this);
					board[x2, y] = newItem;
					items[itemIndex] = newItem;
					itemIndex++;
				}
			}
		}
		while (elapsed2 < shuffleDuration * 0.6f)
		{
			elapsed2 += Time.deltaTime;
			float t2 = elapsed2 / (shuffleDuration * 0.6f);
			for (int j = 0; j < items.Count; j++)
			{
				if (items[j] != null)
				{
					items[j].transform.position = Vector3.Lerp(centerPos, targetPositions[j], t2);
					items[j].transform.rotation = Quaternion.Lerp(items[j].transform.rotation, Quaternion.identity, t2);
				}
			}
			yield return null;
		}
		for (int k = 0; k < items.Count; k++)
		{
			if (items[k] != null)
			{
				items[k].transform.position = targetPositions[k];
				items[k].transform.rotation = Quaternion.identity;
			}
		}
		Debug.Log("✅ 셔플 완료!");
		if (!HasPossibleMoves())
		{
			Debug.Log("⚠\ufe0f 셔플 후에도 움직임이 없습니다. 보장된 배치 생성...");
			yield return StartCoroutine(CreateGuaranteedMoveBoard());
		}
	}

	private int[,] GenerateShuffledBoard()
	{
		int[,] newBoard = new int[3, 3];
		int maxAttempts = 100;
		for (int attempts = 0; attempts < maxAttempts; attempts++)
		{
			for (int y = 0; y < 3; y++)
			{
				for (int x = 0; x < 3; x++)
				{
					newBoard[x, y] = GetSafeShuffleItemId(newBoard, x, y);
				}
			}
			if (HasPossibleMovesOnBoard(newBoard))
			{
				return newBoard;
			}
		}
		return GetGuaranteedMoveBoard();
	}

	private int GetSafeShuffleItemId(int[,] tempBoard, int x, int y)
	{
		List<int> forbiddenIds = new List<int>();
		if (x >= 2 && tempBoard[x - 1, y] == tempBoard[x - 2, y])
		{
			forbiddenIds.Add(tempBoard[x - 1, y]);
		}
		if (y >= 2 && tempBoard[x, y - 1] == tempBoard[x, y - 2])
		{
			forbiddenIds.Add(tempBoard[x, y - 1]);
		}
		int itemId;
		do
		{
			itemId = Random.Range(0, itemPrefabs.Length);
		}
		while (forbiddenIds.Contains(itemId));
		return itemId;
	}

	private bool HasPossibleMovesOnBoard(int[,] testBoard)
	{
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (x < 2 && WouldCreateMatchOnBoard(testBoard, x, y, x + 1, y))
				{
					return true;
				}
				if (y < 2 && WouldCreateMatchOnBoard(testBoard, x, y, x, y + 1))
				{
					return true;
				}
			}
		}
		return false;
	}

	private bool WouldCreateMatchOnBoard(int[,] testBoard, int x1, int y1, int x2, int y2)
	{
		int item1 = testBoard[x1, y1];
		int item2 = (testBoard[x1, y1] = testBoard[x2, y2]);
		testBoard[x2, y2] = item1;
		bool hasMatch = false;
		for (int y3 = 0; y3 < 3; y3++)
		{
			if (testBoard[0, y3] == testBoard[1, y3] && testBoard[1, y3] == testBoard[2, y3])
			{
				hasMatch = true;
				break;
			}
		}
		if (!hasMatch)
		{
			for (int x3 = 0; x3 < 3; x3++)
			{
				if (testBoard[x3, 0] == testBoard[x3, 1] && testBoard[x3, 1] == testBoard[x3, 2])
				{
					hasMatch = true;
					break;
				}
			}
		}
		testBoard[x1, y1] = item1;
		testBoard[x2, y2] = item2;
		return hasMatch;
	}

	private int[,] GetGuaranteedMoveBoard()
	{
		int[,] guaranteedBoard = new int[3, 3];
		if (itemPrefabs.Length >= 3)
		{
			guaranteedBoard[0, 0] = 0;
			guaranteedBoard[1, 0] = 1;
			guaranteedBoard[2, 0] = 2;
			guaranteedBoard[0, 1] = 1;
			guaranteedBoard[1, 1] = 2;
			guaranteedBoard[2, 1] = 0;
			guaranteedBoard[0, 2] = 2;
			guaranteedBoard[1, 2] = 0;
			guaranteedBoard[2, 2] = 1;
		}
		else
		{
			for (int y = 0; y < 3; y++)
			{
				for (int x = 0; x < 3; x++)
				{
					guaranteedBoard[x, y] = (x + y) % itemPrefabs.Length;
				}
			}
		}
		return guaranteedBoard;
	}

	private IEnumerator CreateGuaranteedMoveBoard()
	{
		int[,] guaranteedBoard = GetGuaranteedMoveBoard();
		for (int y = 0; y < 3; y++)
		{
			for (int x = 0; x < 3; x++)
			{
				if (board[x, y] != null)
				{
					Object.Destroy(board[x, y]);
				}
				Vector3 pos = new Vector3((x - 1) * 3, (y - 1) * 3, 15f);
				GameObject go = Object.Instantiate(itemPrefabs[guaranteedBoard[x, y]], pos, Quaternion.identity, gridParent);
				ItemCell cell = go.AddComponent<ItemCell>();
				cell.Init(x, y, guaranteedBoard[x, y], this);
				board[x, y] = go;
			}
		}
		yield return new WaitForSeconds(0.5f);
		Debug.Log("\ud83d\udd27 보장된 배치로 강제 생성 완료!");
	}

	private int GetItemId(int x, int y)
	{
		ItemCell cell = board[x, y].GetComponent<ItemCell>();
		return cell.itemId;
	}
}
