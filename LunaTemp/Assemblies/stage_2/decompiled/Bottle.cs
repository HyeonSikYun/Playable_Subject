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
		}
		else
		{
			base.transform.SetParent(null);
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
			if (!(c == null) && !(c.gameObject == null) && c.IsEmpty())
			{
				float dist = Vector3.Distance(c.GetSnapPosition(), base.transform.position);
				if (dist < 1f && dist < minDist)
				{
					minDist = dist;
					bestCase = c;
				}
			}
		}
		return bestCase;
	}
}
