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
			Debug.Log($"케이스 {base.name}에 초기 병 {bottle.name} 설정됨 (LineIndex: {lineIndex}, BottleColor: {bottle.BottleColor})");
		}
		else if (bottle == null)
		{
			Debug.LogWarning($"케이스 {base.name}에 초기 병이 없습니다 (LineIndex: {lineIndex})");
		}
	}

	public bool IsEmpty()
	{
		return currentBottle == null;
	}

	public void SetCurrentBottle(Bottle bottle)
	{
		currentBottle = bottle;
		if (bottle != null)
		{
			Debug.Log("케이스 " + base.name + "에 병 " + bottle.name + " 설정됨");
		}
	}

	public void ClearBottle()
	{
		if (currentBottle != null)
		{
			Debug.Log("케이스 " + base.name + "에서 병 " + currentBottle.name + " 제거됨");
		}
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
