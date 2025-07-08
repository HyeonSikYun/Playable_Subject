using UnityEngine;

public class Bottle : MonoBehaviour
{
	[SerializeField]
	private Color bottleColor;

	private Vector3 offset;

	private Vector3 originalPosition;

	private bool isDragging = false;

	private Camera cam;

	private float dragZ;

	private Case originalCase;

	public Color BottleColor => bottleColor;

	private void Start()
	{
		cam = Camera.main;
		originalCase = GetComponentInParent<Case>();
		if (originalCase != null)
		{
			originalCase.SetCurrentBottle(this);
			Debug.Log($"{base.name}가 초기 케이스 {originalCase.name}에 설정됨 (LineIndex: {originalCase.lineIndex})");
		}
		else
		{
			Debug.LogWarning(base.name + "의 초기 부모 Case가 없습니다!");
		}
	}

	private void OnMouseDown()
	{
		originalPosition = base.transform.position;
		offset = base.transform.position - GetMouseWorldPos();
		isDragging = true;
		dragZ = base.transform.position.z - 0.5f;
		originalCase = base.transform.GetComponentInParent<Case>();
		if (originalCase != null)
		{
			originalCase.ClearBottle();
			Debug.Log(base.name + " 부모 케이스(" + originalCase.name + ")에서 제거됨");
		}
		base.transform.SetParent(null);
	}

	private void OnMouseDrag()
	{
		if (isDragging)
		{
			Vector3 dragPosition = GetMouseWorldPos() + offset;
			dragPosition.z = dragZ;
			base.transform.position = dragPosition;
		}
	}

	private void OnMouseUp()
	{
		isDragging = false;
		Case targetCase = FindClosestValidCase();
		if (targetCase != null && targetCase.IsEmpty())
		{
			Vector3 snapPos = targetCase.GetSnapPosition();
			base.transform.position = snapPos;
			Transform snapPoint2 = targetCase.transform.Find("SnapPoint");
			if (snapPoint2 != null)
			{
				base.transform.SetParent(snapPoint2);
			}
			else
			{
				base.transform.SetParent(targetCase.transform);
			}
			targetCase.SetCurrentBottle(this);
			Debug.Log($"{base.name}가 케이스 {targetCase.name}에 배치됨 (LineIndex: {targetCase.lineIndex})");
			PuzzleManager.Instance.CheckAndClearLine(targetCase.lineIndex);
			return;
		}
		base.transform.position = originalPosition;
		if (originalCase != null && originalCase.IsEmpty())
		{
			Transform snapPoint = originalCase.transform.Find("SnapPoint");
			if (snapPoint != null)
			{
				base.transform.SetParent(snapPoint);
			}
			else
			{
				base.transform.SetParent(originalCase.transform);
			}
			originalCase.SetCurrentBottle(this);
			Debug.Log(base.name + "가 원래 케이스 " + originalCase.name + "로 복귀됨");
		}
		else
		{
			base.transform.SetParent(null);
			Debug.Log(base.name + "가 원래 자리로 복귀됨 (원래 케이스 없음 또는 비어 있지 않음)");
		}
	}

	private Vector3 GetMouseWorldPos()
	{
		Vector3 mousePos = Input.mousePosition;
		mousePos.z = cam.WorldToScreenPoint(base.transform.position).z;
		return cam.ScreenToWorldPoint(mousePos);
	}

	private Case FindClosestValidCase()
	{
		float minDist = float.PositiveInfinity;
		Case bestCase = null;
		foreach (Case c in PuzzleManager.Instance.AllCases)
		{
			if (c == null || !c.IsEmpty())
			{
				Debug.Log($"케이스 {c?.name} 스킵됨 (null: {c == null}, 비어 있지 않음: {c != null && !c.IsEmpty()})");
				continue;
			}
			float dist = Vector3.Distance(c.GetSnapPosition(), base.transform.position);
			Debug.Log($"케이스 {c.name} 거리: {dist}, 비어 있음: {c.IsEmpty()}");
			if (dist < 1f && c.IsEmpty() && dist < minDist)
			{
				minDist = dist;
				bestCase = c;
			}
		}
		Debug.Log(string.Format("선택된 케이스: {0}, 최소 거리: {1}", (bestCase != null) ? bestCase.name : "null", minDist));
		return bestCase;
	}
}
