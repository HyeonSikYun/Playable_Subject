using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIScaler : MonoBehaviour
{
    public RectTransform topImage;
    public RectTransform middleImage;
    public RectTransform bottomButton;
    private TextMeshProUGUI tmpText;

    public float aspectThreshold = 0.7f;

    private Vector2 topOriginalSize;
    private Vector2 middleOriginalSize;
    private Vector2 buttonOriginalSize;

    private float originalFontSize = 0f;
    private float currentAspect = 0f;

    void Start()
    {
        // 원본 크기 저장
        topOriginalSize = topImage.sizeDelta;
        middleOriginalSize = middleImage.sizeDelta;
        buttonOriginalSize = bottomButton.sizeDelta;

        // 텍스트 컴포넌트 찾기
        tmpText = bottomButton.GetComponentInChildren<TextMeshProUGUI>();

        if (tmpText != null)
            originalFontSize = tmpText.fontSize;

        UpdateUIScale();
    }

    void Update()
    {
        float newAspect = (float)Screen.width / Screen.height;
        if (Mathf.Abs(newAspect - currentAspect) > 0.01f)
        {
            UpdateUIScale();
        }
    }

    void UpdateUIScale()
    {
        currentAspect = (float)Screen.width / Screen.height;

        bool isWide = currentAspect > aspectThreshold;

        float scale = isWide ? 0.5f : 1f;

        // 이미지 크기 조절
        topImage.sizeDelta = topOriginalSize * scale;
        middleImage.sizeDelta = middleOriginalSize * scale;
        bottomButton.sizeDelta = buttonOriginalSize * scale;

        // 텍스트 크기 조절
        if (tmpText != null)
            tmpText.fontSize = originalFontSize * scale;

    }
}
