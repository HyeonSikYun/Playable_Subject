using UnityEngine;

public class Case : MonoBehaviour
{
    public int lineIndex;  // 인스펙터에서 줄 번호 직접 설정
    private Bottle currentBottle;
    [SerializeField] private Color caseColor;
    public Color CaseColor => caseColor;

    private void Start()
    {
        // SnapPoint 또는 Case의 자식에서 Bottle 찾기
        Transform snapPoint = transform.Find("SnapPoint");
        Bottle bottle = null;
        if (snapPoint != null)
        {
            bottle = snapPoint.GetComponentInChildren<Bottle>();
        }
        if (bottle == null) // SnapPoint에 없으면 Case의 직접 자식에서 찾기
        {
            bottle = GetComponentInChildren<Bottle>();
        }
        if (bottle != null && currentBottle == null)
        {
            currentBottle = bottle;
            bottle.transform.SetParent(snapPoint != null ? snapPoint : transform);
        }

    }

    public bool IsEmpty() => currentBottle == null;

    public void SetCurrentBottle(Bottle bottle)
    {
        currentBottle = bottle;
    }

    public void ClearBottle()
    {
        currentBottle = null;
    }

    public Bottle GetCurrentBottle() => currentBottle;

    public Vector3 GetSnapPosition()
    {
        Transform snapPoint = transform.Find("SnapPoint");
        if (snapPoint != null)
            return snapPoint.position;
        else
            return transform.position + Vector3.up * 0.5f;
    }
}