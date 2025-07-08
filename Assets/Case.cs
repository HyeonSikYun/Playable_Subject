using UnityEngine;

public class Case : MonoBehaviour
{
    public int lineIndex;  // �ν����Ϳ��� �� ��ȣ ���� ����
    private Bottle currentBottle;
    [SerializeField] private Color caseColor;
    public Color CaseColor => caseColor;

    private void Start()
    {
        // SnapPoint �Ǵ� Case�� �ڽĿ��� Bottle ã��
        Transform snapPoint = transform.Find("SnapPoint");
        Bottle bottle = null;
        if (snapPoint != null)
        {
            bottle = snapPoint.GetComponentInChildren<Bottle>();
        }
        if (bottle == null) // SnapPoint�� ������ Case�� ���� �ڽĿ��� ã��
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