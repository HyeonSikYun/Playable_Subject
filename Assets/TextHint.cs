using UnityEngine;
using TMPro;
using DG.Tweening;

public class TextHint : MonoBehaviour
{
    public TextMeshProUGUI hintText;     // TMP ������Ʈ ����
    public float scaleAmount = 1.2f;     // Ŀ���� ����
    public float duration = 0.6f;        // �� �� Ŀ���µ� �ɸ��� �ð�

    void Start()
    {
        AnimateLoop();
    }

    void AnimateLoop()
    {
        hintText.transform.localScale = Vector3.one;  // �ʱ� ũ��

        hintText.transform
            .DOScale(Vector3.one * scaleAmount, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);  // �ε巴�� �ݺ�
    }
}
