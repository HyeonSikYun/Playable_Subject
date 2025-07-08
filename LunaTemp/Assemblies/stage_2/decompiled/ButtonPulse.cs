using DG.Tweening;
using UnityEngine;

public class ButtonPulse : MonoBehaviour
{
	public float scaleMultiplier = 1.05f;

	public float duration = 0.5f;

	private Vector3 originalScale;

	private void OnEnable()
	{
		originalScale = base.transform.localScale;
		base.transform.DOScale(originalScale * scaleMultiplier, duration).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
	}

	private void OnDisable()
	{
		base.transform.DOKill();
		base.transform.localScale = originalScale;
	}
}
