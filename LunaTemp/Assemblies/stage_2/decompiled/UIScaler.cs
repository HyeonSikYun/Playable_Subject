using TMPro;
using UnityEngine;

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

	private void Start()
	{
		topOriginalSize = topImage.sizeDelta;
		middleOriginalSize = middleImage.sizeDelta;
		buttonOriginalSize = bottomButton.sizeDelta;
		tmpText = bottomButton.GetComponentInChildren<TextMeshProUGUI>();
		if (tmpText != null)
		{
			originalFontSize = tmpText.fontSize;
		}
		UpdateUIScale();
	}

	private void Update()
	{
		float newAspect = (float)Screen.width / (float)Screen.height;
		if (Mathf.Abs(newAspect - currentAspect) > 0.01f)
		{
			UpdateUIScale();
		}
	}

	private void UpdateUIScale()
	{
		currentAspect = (float)Screen.width / (float)Screen.height;
		float scale = ((currentAspect > aspectThreshold) ? 0.5f : 1f);
		topImage.sizeDelta = topOriginalSize * scale;
		middleImage.sizeDelta = middleOriginalSize * scale;
		bottomButton.sizeDelta = buttonOriginalSize * scale;
		if (tmpText != null)
		{
			tmpText.fontSize = originalFontSize * scale;
		}
	}
}
