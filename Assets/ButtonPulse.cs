using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class ButtonPulse : MonoBehaviour
{
    public float scaleMultiplier = 1.05f;  // �󸶳� Ŀ����
    public float duration = 0.5f;          // �� ����Ŭ �ð�

    private Vector3 originalScale;

    void OnEnable()
    {
        originalScale = transform.localScale;

        // �ε巴�� Ŀ���� �۾����� (���� ���� ����)
        transform.DOScale(originalScale * scaleMultiplier, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);
    }

    void OnDisable()
    {
        // �ִϸ��̼� ���� �� ������ ����
        transform.DOKill();
        transform.localScale = originalScale;
    }
}
