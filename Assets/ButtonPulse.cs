using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using UnityEngine.Analytics;  // �߰�

public class ButtonPulse : MonoBehaviour
{
    public float scaleMultiplier = 1.05f;  // �󸶳� Ŀ����
    public float duration = 0.5f;          // �� ����Ŭ �ð�

    private Vector3 originalScale;

    private Button button;

    void OnEnable()
    {
        originalScale = transform.localScale;

        // �ε巴�� Ŀ���� �۾����� (���� ���� ����)
        transform.DOScale(originalScale * scaleMultiplier, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine);

        // Button ������Ʈ �޾Ƽ� Ŭ�� �̺�Ʈ ���
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

    // ��ư Ŭ�� �� ȣ��Ǵ� �Լ�
    private void OnClickCTA()
    {
        Analytics.CustomEvent("Click on CTA", new System.Collections.Generic.Dictionary<string, object>
        {
            { "cta_id", 8 }
        });
    }
}
