using UnityEngine;
using System.Collections;
using System.Collections.Generic;
public class GameManager : MonoBehaviour
{
    public GameObject[] itemPrefabs; // 3개의 아이템 프리팹
    public Transform gridParent;     // 아이템을 배치할 부모
    public float swapDuration = 0.3f;    // 스왑 애니메이션 시간
    public float destroyDuration = 0.5f; // 삭제 애니메이션 시간
    public float refillDuration = 0.4f;  // 리필 애니메이션 시간
    public float shuffleDuration = 0.8f; // 셔플 애니메이션 시간
    private bool isAnimating = false;    // 애니메이션 중 입력 방지
    private GameObject[,] board = new GameObject[3, 3];
    private ItemCell firstSelected = null;
    void Start()
    {
        GenerateBoard();
    }
    void GenerateBoard()
    {
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                // 위치 계산 수정: x,y는 -3, 0, 3으로, z는 15로 고정
                Vector3 pos = new Vector3((x - 1) * 3, (y - 1) * 3, 15);
                int itemId = GetSafeItemId(x, y);
                GameObject go = Instantiate(itemPrefabs[itemId], pos, Quaternion.identity, gridParent);
                ItemCell cell = go.AddComponent<ItemCell>();
                cell.Init(x, y, itemId, this);
                board[x, y] = go;
            }
        }
    }

    // 매치가 안되는 안전한 아이템 ID 반환
    int GetSafeItemId(int x, int y)
    {
        List<int> forbiddenIds = new List<int>();

        // 가로 매치 방지 (왼쪽 2개가 같으면 다른 것 선택)
        if (x >= 2 && GetItemIdSafe(x - 1, y) == GetItemIdSafe(x - 2, y))
        {
            forbiddenIds.Add(GetItemIdSafe(x - 1, y));
        }

        // 세로 매치 방지 (아래 2개가 같으면 다른 것 선택)
        if (y >= 2 && GetItemIdSafe(x, y - 1) == GetItemIdSafe(x, y - 2))
        {
            forbiddenIds.Add(GetItemIdSafe(x, y - 1));
        }

        // 금지된 ID를 제외한 랜덤 ID 선택
        int itemId;
        do
        {
            itemId = Random.Range(0, itemPrefabs.Length);
        } while (forbiddenIds.Contains(itemId));

        return itemId;
    }

    // 안전한 아이템 ID 가져오기 (null 체크 포함)
    int GetItemIdSafe(int x, int y)
    {
        if (board[x, y] == null) return -1;
        ItemCell cell = board[x, y].GetComponent<ItemCell>();
        return cell != null ? cell.itemId : -1;
    }
    public void OnItemSelected(ItemCell selected)
    {
        if (isAnimating) return; // 애니메이션 중이면 입력 차단

        if (firstSelected == null)
        {
            firstSelected = selected;
            firstSelected.Highlight(true);
        }
        else
        {
            // 인접한 아이템이면 교체
            if (IsAdjacent(firstSelected, selected))
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
    bool IsAdjacent(ItemCell a, ItemCell b)
    {
        int dx = Mathf.Abs(a.x - b.x);
        int dy = Mathf.Abs(a.y - b.y);
        return (dx + dy == 1);
    }
    IEnumerator TrySwap(ItemCell a, ItemCell b)
    {
        isAnimating = true;

        // 스왑 애니메이션
        yield return StartCoroutine(SwapItemsAnimated(a, b));

        // 매치 검사
        if (CheckMatches())
        {
            Debug.Log("🎉 매치 성공!");
            // 매치된 아이템들 삭제 애니메이션
            yield return StartCoroutine(DestroyMatchedItems());
            // 리필 애니메이션
            yield return StartCoroutine(RefillBoardAnimated());

            // 리필 후 가능한 움직임 확인
            if (!HasPossibleMoves())
            {
                yield return StartCoroutine(ShowShuffleMessage());
                yield return StartCoroutine(ShuffleBoard());
            }
        }
        else
        {
            Debug.Log("❌ 매치 실패 - 되돌리기");
            // 매치가 안되면 다시 되돌리기
            yield return StartCoroutine(SwapItemsAnimated(a, b));
        }

        isAnimating = false;
    }

    IEnumerator SwapItemsAnimated(ItemCell a, ItemCell b)
    {
        Vector3 startPosA = a.transform.position;
        Vector3 startPosB = b.transform.position;

        float elapsed = 0f;
        while (elapsed < swapDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / swapDuration;

            // 부드러운 애니메이션 커브
            t = Mathf.SmoothStep(0f, 1f, t);

            a.transform.position = Vector3.Lerp(startPosA, startPosB, t);
            b.transform.position = Vector3.Lerp(startPosB, startPosA, t);

            yield return null;
        }

        // 정확한 위치 설정
        a.transform.position = startPosB;
        b.transform.position = startPosA;

        // board 배열과 좌표 교환
        SwapBoardData(a, b);
    }

    void SwapBoardData(ItemCell a, ItemCell b)
    {
        // board 배열 교체
        board[a.x, a.y] = b.gameObject;
        board[b.x, b.y] = a.gameObject;

        // x/y 값 교환
        int tempX = a.x;
        int tempY = a.y;
        a.SetPosition(b.x, b.y);
        b.SetPosition(tempX, tempY);
    }
    bool CheckMatches()
    {
        bool matchFound = false;

        // 가로 검사
        for (int y = 0; y < 3; y++)
        {
            if (GetItemId(0, y) == GetItemId(1, y) && GetItemId(1, y) == GetItemId(2, y))
            {
                matchFound = true;
                break;
            }
        }

        // 세로 검사
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

    IEnumerator DestroyMatchedItems()
    {
        List<GameObject> toDestroy = new List<GameObject>();

        // 매치된 아이템들 찾기
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

        // 삭제 애니메이션 (크기 줄이기 + 투명도)
        float elapsed = 0f;
        Vector3[] originalScales = new Vector3[toDestroy.Count];

        for (int i = 0; i < toDestroy.Count; i++)
        {
            if (toDestroy[i] != null)
                originalScales[i] = toDestroy[i].transform.localScale;
        }

        while (elapsed < destroyDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / destroyDuration;

            for (int i = 0; i < toDestroy.Count; i++)
            {
                if (toDestroy[i] != null)
                {
                    // 크기 줄이기
                    toDestroy[i].transform.localScale = Vector3.Lerp(originalScales[i], Vector3.zero, t);

                    // 투명도 (Renderer가 있다면)
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

        // 실제 삭제
        foreach (GameObject obj in toDestroy)
        {
            if (obj != null)
            {
                ItemCell cell = obj.GetComponent<ItemCell>();
                board[cell.x, cell.y] = null;
                Destroy(obj);
            }
        }
    }

    IEnumerator RefillBoardAnimated()
    {
        List<GameObject> newItems = new List<GameObject>();

        // 새 아이템들 생성 (위쪽에서 시작)
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                if (board[x, y] == null)
                {
                    Vector3 targetPos = new Vector3((x - 1) * 3, (y - 1) * 3, 15);
                    Vector3 startPos = new Vector3(targetPos.x, targetPos.y + 9, targetPos.z); // 위에서 시작

                    int itemId = GetSafeItemId(x, y);
                    GameObject go = Instantiate(itemPrefabs[itemId], startPos, Quaternion.identity, gridParent);
                    ItemCell cell = go.AddComponent<ItemCell>();
                    cell.Init(x, y, itemId, this);
                    board[x, y] = go;

                    newItems.Add(go);
                }
            }
        }

        // 낙하 애니메이션
        float elapsed = 0f;
        Vector3[] startPositions = new Vector3[newItems.Count];
        Vector3[] targetPositions = new Vector3[newItems.Count];

        for (int i = 0; i < newItems.Count; i++)
        {
            startPositions[i] = newItems[i].transform.position;
            ItemCell cell = newItems[i].GetComponent<ItemCell>();
            targetPositions[i] = new Vector3((cell.x - 1) * 3, (cell.y - 1) * 3, 15);
        }

        while (elapsed < refillDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / refillDuration;

            // 바운스 효과
            t = Mathf.SmoothStep(0f, 1f, t);

            for (int i = 0; i < newItems.Count; i++)
            {
                if (newItems[i] != null)
                {
                    newItems[i].transform.position = Vector3.Lerp(startPositions[i], targetPositions[i], t);
                }
            }

            yield return null;
        }

        // 정확한 위치 설정
        for (int i = 0; i < newItems.Count; i++)
        {
            if (newItems[i] != null)
            {
                newItems[i].transform.position = targetPositions[i];
            }
        }

        // 리필 후 연속 매치 확인
        if (CheckMatches())
        {
            Debug.Log("🎉 연속 매치!");
            yield return StartCoroutine(DestroyMatchedItems());
            yield return StartCoroutine(RefillBoardAnimated());
        }

        // 가능한 움직임 확인
        if (!HasPossibleMoves())
        {
            yield return StartCoroutine(ShowShuffleMessage());
            yield return StartCoroutine(ShuffleBoard());
        }
    }

    bool HasPossibleMoves()
    {
        // 모든 가능한 스왑 조합을 확인
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                // 오른쪽 아이템과 스왑 확인
                if (x < 2)
                {
                    if (WouldCreateMatch(x, y, x + 1, y))
                        return true;
                }

                // 위쪽 아이템과 스왑 확인
                if (y < 2)
                {
                    if (WouldCreateMatch(x, y, x, y + 1))
                        return true;
                }
            }
        }
        return false;
    }

    bool WouldCreateMatch(int x1, int y1, int x2, int y2)
    {
        // 임시로 스왑해서 매치 확인
        int item1 = GetItemId(x1, y1);
        int item2 = GetItemId(x2, y2);

        // 임시 배열 생성
        int[,] tempBoard = new int[3, 3];
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                tempBoard[x, y] = GetItemId(x, y);
            }
        }

        // 임시 스왑
        tempBoard[x1, y1] = item2;
        tempBoard[x2, y2] = item1;

        // 매치 확인
        // 가로 검사
        for (int y = 0; y < 3; y++)
        {
            if (tempBoard[0, y] == tempBoard[1, y] && tempBoard[1, y] == tempBoard[2, y])
                return true;
        }

        // 세로 검사
        for (int x = 0; x < 3; x++)
        {
            if (tempBoard[x, 0] == tempBoard[x, 1] && tempBoard[x, 1] == tempBoard[x, 2])
                return true;
        }

        return false;
    }

    IEnumerator ShowShuffleMessage()
    {
        Debug.Log("🔄 가능한 움직임이 없습니다! 자동 셔플 중...");

        // UI 메시지 표시 (Canvas나 UI Text가 있다면)
        // 여기서는 콘솔 메시지로 대체
        yield return new WaitForSeconds(1.5f);
    }

    IEnumerator ShuffleBoard()
    {
        Debug.Log("🎲 셔플 시작!");

        // 현재 아이템들의 ID 수집
        List<int> itemIds = new List<int>();
        List<GameObject> items = new List<GameObject>();

        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                if (board[x, y] != null)
                {
                    itemIds.Add(GetItemId(x, y));
                    items.Add(board[x, y]);
                }
            }
        }

        // 셔플 애니메이션 시작 (아이템들을 중앙으로 모음)
        Vector3 centerPos = new Vector3(0, 0, 15);
        float elapsed = 0f;
        Vector3[] startPositions = new Vector3[items.Count];

        for (int i = 0; i < items.Count; i++)
        {
            startPositions[i] = items[i].transform.position;
        }

        // 중앙으로 모으기
        while (elapsed < shuffleDuration * 0.4f)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / (shuffleDuration * 0.4f);

            for (int i = 0; i < items.Count; i++)
            {
                if (items[i] != null)
                {
                    Vector3 randomOffset = new Vector3(
                        Random.Range(-0.5f, 0.5f),
                        Random.Range(-0.5f, 0.5f),
                        0
                    );
                    items[i].transform.position = Vector3.Lerp(startPositions[i], centerPos + randomOffset, t);

                    // 회전 효과
                    items[i].transform.rotation = Quaternion.Euler(0, 0, Random.Range(0, 360) * t);
                }
            }

            yield return null;
        }

        // 매치 안되는 셔플 배치 생성
        int[,] shuffledBoard = GenerateShuffledBoard();

        // 새로운 위치로 분산
        elapsed = 0f;
        Vector3[] targetPositions = new Vector3[items.Count];
        int itemIndex = 0;

        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                if (itemIndex < items.Count)
                {
                    targetPositions[itemIndex] = new Vector3((x - 1) * 3, (y - 1) * 3, 15);

                    // 새로운 아이템 타입으로 교체
                    Destroy(items[itemIndex]);
                    GameObject newItem = Instantiate(itemPrefabs[shuffledBoard[x, y]], centerPos, Quaternion.identity, gridParent);
                    ItemCell newCell = newItem.AddComponent<ItemCell>();
                    newCell.Init(x, y, shuffledBoard[x, y], this);
                    board[x, y] = newItem;
                    items[itemIndex] = newItem;

                    itemIndex++;
                }
            }
        }

        // 새 위치로 이동
        while (elapsed < shuffleDuration * 0.6f)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / (shuffleDuration * 0.6f);

            for (int i = 0; i < items.Count; i++)
            {
                if (items[i] != null)
                {
                    items[i].transform.position = Vector3.Lerp(centerPos, targetPositions[i], t);

                    // 회전 정리
                    items[i].transform.rotation = Quaternion.Lerp(
                        items[i].transform.rotation,
                        Quaternion.identity,
                        t
                    );
                }
            }

            yield return null;
        }

        // 정확한 위치와 회전 설정
        for (int i = 0; i < items.Count; i++)
        {
            if (items[i] != null)
            {
                items[i].transform.position = targetPositions[i];
                items[i].transform.rotation = Quaternion.identity;
            }
        }

        Debug.Log("✅ 셔플 완료!");

        // 안전장치: 셔플 후에도 움직임이 없다면 강제로 보장된 배치 생성
        if (!HasPossibleMoves())
        {
            Debug.Log("⚠️ 셔플 후에도 움직임이 없습니다. 보장된 배치 생성...");
            yield return StartCoroutine(CreateGuaranteedMoveBoard());
        }
    }

    int[,] GenerateShuffledBoard()
    {
        int[,] newBoard = new int[3, 3];
        int maxAttempts = 100;
        int attempts = 0;

        while (attempts < maxAttempts)
        {
            // 랜덤 배치 생성
            for (int y = 0; y < 3; y++)
            {
                for (int x = 0; x < 3; x++)
                {
                    newBoard[x, y] = GetSafeShuffleItemId(newBoard, x, y);
                }
            }

            // 생성된 배치가 가능한 움직임이 있는지 확인
            if (HasPossibleMovesOnBoard(newBoard))
            {
                return newBoard;
            }

            attempts++;
        }

        // 실패하면 보장된 배치 반환
        return GetGuaranteedMoveBoard();
    }

    int GetSafeShuffleItemId(int[,] tempBoard, int x, int y)
    {
        List<int> forbiddenIds = new List<int>();

        // 가로 매치 방지
        if (x >= 2 && tempBoard[x - 1, y] == tempBoard[x - 2, y])
        {
            forbiddenIds.Add(tempBoard[x - 1, y]);
        }

        // 세로 매치 방지
        if (y >= 2 && tempBoard[x, y - 1] == tempBoard[x, y - 2])
        {
            forbiddenIds.Add(tempBoard[x, y - 1]);
        }

        // 금지된 ID를 제외한 랜덤 ID 선택
        int itemId;
        do
        {
            itemId = Random.Range(0, itemPrefabs.Length);
        } while (forbiddenIds.Contains(itemId));

        return itemId;
    }

    bool HasPossibleMovesOnBoard(int[,] testBoard)
    {
        // 모든 가능한 스왑 조합을 확인
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                // 오른쪽 아이템과 스왑 확인
                if (x < 2)
                {
                    if (WouldCreateMatchOnBoard(testBoard, x, y, x + 1, y))
                        return true;
                }

                // 위쪽 아이템과 스왑 확인
                if (y < 2)
                {
                    if (WouldCreateMatchOnBoard(testBoard, x, y, x, y + 1))
                        return true;
                }
            }
        }
        return false;
    }

    bool WouldCreateMatchOnBoard(int[,] testBoard, int x1, int y1, int x2, int y2)
    {
        // 임시 스왑
        int item1 = testBoard[x1, y1];
        int item2 = testBoard[x2, y2];

        testBoard[x1, y1] = item2;
        testBoard[x2, y2] = item1;

        bool hasMatch = false;

        // 가로 검사
        for (int y = 0; y < 3; y++)
        {
            if (testBoard[0, y] == testBoard[1, y] && testBoard[1, y] == testBoard[2, y])
            {
                hasMatch = true;
                break;
            }
        }

        // 세로 검사
        if (!hasMatch)
        {
            for (int x = 0; x < 3; x++)
            {
                if (testBoard[x, 0] == testBoard[x, 1] && testBoard[x, 1] == testBoard[x, 2])
                {
                    hasMatch = true;
                    break;
                }
            }
        }

        // 원래대로 복원
        testBoard[x1, y1] = item1;
        testBoard[x2, y2] = item2;

        return hasMatch;
    }

    int[,] GetGuaranteedMoveBoard()
    {
        // 확실히 움직임이 보장되는 패턴 생성
        // 예: 0 1 2
        //     1 2 0  <- 이 패턴은 항상 움직임 가능
        //     2 0 1

        int[,] guaranteedBoard = new int[3, 3];

        if (itemPrefabs.Length >= 3)
        {
            guaranteedBoard[0, 0] = 0; guaranteedBoard[1, 0] = 1; guaranteedBoard[2, 0] = 2;
            guaranteedBoard[0, 1] = 1; guaranteedBoard[1, 1] = 2; guaranteedBoard[2, 1] = 0;
            guaranteedBoard[0, 2] = 2; guaranteedBoard[1, 2] = 0; guaranteedBoard[2, 2] = 1;
        }
        else
        {
            // 아이템이 3개 미만일 때 대안 패턴
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

    IEnumerator CreateGuaranteedMoveBoard()
    {
        int[,] guaranteedBoard = GetGuaranteedMoveBoard();

        // 현재 보드를 보장된 배치로 교체
        for (int y = 0; y < 3; y++)
        {
            for (int x = 0; x < 3; x++)
            {
                if (board[x, y] != null)
                {
                    Destroy(board[x, y]);
                }

                Vector3 pos = new Vector3((x - 1) * 3, (y - 1) * 3, 15);
                GameObject go = Instantiate(itemPrefabs[guaranteedBoard[x, y]], pos, Quaternion.identity, gridParent);
                ItemCell cell = go.AddComponent<ItemCell>();
                cell.Init(x, y, guaranteedBoard[x, y], this);
                board[x, y] = go;
            }
        }

        yield return new WaitForSeconds(0.5f);
        Debug.Log("🔧 보장된 배치로 강제 생성 완료!");
    }
    int GetItemId(int x, int y)
    {
        ItemCell cell = board[x, y].GetComponent<ItemCell>();
        return cell.itemId;
    }
}