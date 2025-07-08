using UnityEngine;

public class Bottle : MonoBehaviour
{
    [SerializeField] private Color bottleColor;
    public Color BottleColor => bottleColor;
    private Vector3 offset;
    private Vector3 originalPosition;
    private bool isDragging = false;
    private Camera cam;
    private float dragZ;
    private Case originalCase; // 원래 케이스 저장

    void Start()
    {
        cam = Camera.main;
        // 초기 부모 Case 확인
        originalCase = GetComponentInParent<Case>();
        if (originalCase != null)
        {
            originalCase.SetCurrentBottle(this);
        }
    }

    void OnMouseDown()
    {
        originalPosition = transform.position;
        offset = transform.position - GetMouseWorldPos();
        isDragging = true;
        dragZ = transform.position.z - 0.5f;

        // 원래 케이스 저장
        originalCase = transform.GetComponentInParent<Case>();
        if (originalCase != null)
        {
            originalCase.ClearBottle();
        }
        transform.SetParent(null);
    }

    void OnMouseDrag()
    {
        if (isDragging)
        {
            Vector3 dragPosition = GetMouseWorldPos() + offset;
            dragPosition.z = dragZ;
            transform.position = dragPosition;
        }
    }

    void OnMouseUp()
    {
        isDragging = false;
        Case targetCase = FindClosestValidCase();
        if (targetCase != null && targetCase.IsEmpty())
        {
            Vector3 snapPos = targetCase.GetSnapPosition();
            transform.position = snapPos;
            Transform snapPoint = targetCase.transform.Find("SnapPoint");
            if (snapPoint != null)
                transform.SetParent(snapPoint);
            else
                transform.SetParent(targetCase.transform);
            targetCase.SetCurrentBottle(this);
            PuzzleManager.Instance.CheckAndClearLine(targetCase.lineIndex);
        }
        else
        {
            transform.position = originalPosition;
            if (originalCase != null && originalCase.IsEmpty())
            {
                Transform snapPoint = originalCase.transform.Find("SnapPoint");
                if (snapPoint != null)
                    transform.SetParent(snapPoint);
                else
                    transform.SetParent(originalCase.transform);
                originalCase.SetCurrentBottle(this);
            }
            else
            {
                transform.SetParent(null);
            }
        }
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = cam.WorldToScreenPoint(transform.position).z;
        return cam.ScreenToWorldPoint(mousePos);
    }

    private Case FindClosestValidCase()
    {
        float minDist = Mathf.Infinity;
        Case bestCase = null;

        foreach (var c in PuzzleManager.Instance.AllCases)
        {
            // 🔹 null 또는 Destroy된 경우 건너뛰기
            if (c == null || c.gameObject == null)
            {
                continue;
            }

            if (!c.IsEmpty())
            {
                continue;
            }

            float dist = Vector3.Distance(c.GetSnapPosition(), transform.position);

            if (dist < 1f)
            {
                if (dist < minDist)
                {
                    minDist = dist;
                    bestCase = c;
                }
            }
        }
        return bestCase;
    }

}