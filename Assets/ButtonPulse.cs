using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ButtonPulse : MonoBehaviour
{
    public float scaleMultiplier = 1.05f;  // 얼마나 커질지
    public float duration = 0.5f;          // 한 사이클 시간

    private Vector3 originalScale;

    void OnEnable()
    {
        originalScale = transform.localScale;

        // 부드럽게 커졌다 작아지기 (원래 비율 유지)
        transform.DOScale(originalScale * scaleMultiplier, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);
    }

    void OnDisable()
    {
        // 애니메이션 정지 및 스케일 복구
        transform.DOKill();
        transform.localScale = originalScale;
    }
}
