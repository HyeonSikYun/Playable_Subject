using UnityEngine;
using TMPro;
using DG.Tweening;

public class TextHint : MonoBehaviour
{
    public TextMeshProUGUI hintText;     // TMP 컴포넌트 연결
    public float scaleAmount = 1.2f;     // 커지는 비율
    public float duration = 0.6f;        // 한 번 커지는데 걸리는 시간

    void Start()
    {
        AnimateLoop();
    }

    void AnimateLoop()
    {
        hintText.transform.localScale = Vector3.one;  // 초기 크기

        hintText.transform
            .DOScale(Vector3.one * scaleAmount, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);  // 부드럽게 반복
    }
}
