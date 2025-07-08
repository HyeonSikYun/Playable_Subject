using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using UnityEngine.Analytics;  // 추가

public class ButtonPulse : MonoBehaviour
{
    public float scaleMultiplier = 1.05f;  // 얼마나 커질지
    public float duration = 0.5f;          // 한 사이클 시간

    private Vector3 originalScale;

    private Button button;

    void OnEnable()
    {
        originalScale = transform.localScale;

        // 부드럽게 커졌다 작아지기 (원래 비율 유지)
        transform.DOScale(originalScale * scaleMultiplier, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);

        // Button 컴포넌트 받아서 클릭 이벤트 등록
        button = GetComponent<Button>();
        if (button != null)
        {
            button.onClick.AddListener(OnClickCTA);
        }
    }

    void OnDisable()
    {
        transform.DOKill();
        transform.localScale = originalScale;

        if (button != null)
        {
            button.onClick.RemoveListener(OnClickCTA);
        }
    }

    // 버튼 클릭 시 호출되는 함수
    private void OnClickCTA()
    {
        Analytics.CustomEvent("Click on CTA", new System.Collections.Generic.Dictionary<string, object>
        {
            { "cta_id", 8 }
        });
    }
}
