using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Analytics;
using UnityEngine.UI;

public class ButtonPulse : MonoBehaviour
{
	public float scaleMultiplier = 1.05f;

	public float duration = 0.5f;

	private Vector3 originalScale;

	private Button button;

	private void OnEnable()
	{
		originalScale = base.transform.localScale;
		base.transform.DOScale(originalScale * scaleMultiplier, duration).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
		button = GetComponent<Button>();
		if (button != null)
		{
			button.onClick.AddListener(OnClickCTA);
		}
	}

	private void OnDisable()
	{
		base.transform.DOKill();
		base.transform.localScale = originalScale;
		if (button != null)
		{
			button.onClick.RemoveListener(OnClickCTA);
		}
	}

	private void OnClickCTA()
	{
		Analytics.CustomEvent("Click on CTA", new Dictionary<string, object> { { "cta_id", 8 } });
	}
}
