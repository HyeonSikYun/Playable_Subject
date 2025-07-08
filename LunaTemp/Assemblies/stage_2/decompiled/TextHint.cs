using DG.Tweening;
using TMPro;
using UnityEngine;

public class TextHint : MonoBehaviour
{
	public TextMeshProUGUI hintText;

	public float scaleAmount = 1.2f;

	public float duration = 0.6f;

	private void Start()
	{
		AnimateLoop();
	}

	private void AnimateLoop()
	{
		hintText.transform.localScale = Vector3.one;
		hintText.transform.DOScale(Vector3.one * scaleAmount, duration).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
	}
}
