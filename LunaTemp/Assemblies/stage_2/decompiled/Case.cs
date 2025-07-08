using UnityEngine;

public class Case : MonoBehaviour
{
	public int lineIndex;

	private Bottle currentBottle;

	[SerializeField]
	private Color caseColor;

	public Color CaseColor => caseColor;

	private void Start()
	{
		Transform snapPoint = base.transform.Find("SnapPoint");
		Bottle bottle = null;
		if (snapPoint != null)
		{
			bottle = snapPoint.GetComponentInChildren<Bottle>();
		}
		if (bottle == null)
		{
			bottle = GetComponentInChildren<Bottle>();
		}
		if (bottle != null && currentBottle == null)
		{
			currentBottle = bottle;
			bottle.transform.SetParent((snapPoint != null) ? snapPoint : base.transform);
		}
	}

	public bool IsEmpty()
	{
		return currentBottle == null;
	}

	public void SetCurrentBottle(Bottle bottle)
	{
		currentBottle = bottle;
	}

	public void ClearBottle()
	{
		currentBottle = null;
	}

	public Bottle GetCurrentBottle()
	{
		return currentBottle;
	}

	public Vector3 GetSnapPosition()
	{
		Transform snapPoint = base.transform.Find("SnapPoint");
		if (snapPoint != null)
		{
			return snapPoint.position;
		}
		return base.transform.position + Vector3.up * 0.5f;
	}
}
