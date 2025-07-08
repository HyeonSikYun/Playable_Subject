using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PuzzleManager : MonoBehaviour
{
	public static PuzzleManager Instance;

	public List<Case> AllCases;

	public GameObject[] goodEffectPrefabs;

	public Canvas uiCanvas;

	private void Awake()
	{
		Instance = this;
		if (AllCases != null && AllCases.Count != 0)
		{
			TestInitialLines();
		}
	}

	private void TestInitialLines()
	{
		HashSet<int> lineIndices = new HashSet<int>();
		foreach (Case c in AllCases)
		{
			if (c != null)
			{
				lineIndices.Add(c.lineIndex);
			}
		}
		foreach (int lineIndex in lineIndices)
		{
			CheckAndClearLine(lineIndex);
		}
	}

	public void CheckAndClearLine(int lineIndex)
	{
		if (AllCases != null && AllCases.Count != 0)
		{
			List<Case> lineCases = AllCases.FindAll((Case c) => c != null && c.lineIndex == lineIndex);
			if (IsLineMatching(lineCases))
			{
				ClearLine(lineCases);
			}
		}
	}

	private bool IsLineMatching(List<Case> line)
	{
		if (line == null || line.Count == 0)
		{
			return false;
		}
		foreach (Case c in line)
		{
			if (c == null)
			{
				return false;
			}
			if (c.IsEmpty())
			{
				return false;
			}
			Bottle b = c.GetCurrentBottle();
			if (b == null)
			{
				return false;
			}
			if (!IsColorMatch(b.BottleColor, c.CaseColor))
			{
				return false;
			}
		}
		return true;
	}

	private void ClearLine(List<Case> line)
	{
		if (line == null || line.Count == 0)
		{
			return;
		}
		int deletedLineIndex = line[0].lineIndex;
		foreach (Case c in line)
		{
			if (!(c == null))
			{
				Bottle b = c.GetCurrentBottle();
				if (b != null)
				{
					Object.Destroy(b.gameObject);
				}
				c.ClearBottle();
				AllCases.Remove(c);
				Object.Destroy(c.gameObject);
			}
		}
		DropLinesAbove(deletedLineIndex);
	}

	private bool IsColorMatch(Color a, Color b, float tolerance = 0.05f)
	{
		return Mathf.Abs(a.r - b.r) < tolerance && Mathf.Abs(a.g - b.g) < tolerance && Mathf.Abs(a.b - b.b) < tolerance && Mathf.Abs(a.a - b.a) < tolerance;
	}

	private void DropLinesAbove(int deletedLineIndex)
	{
		float lineHeight = 1.65f;
		Vector3 worldPos = new Vector3(0f, 0f, 15f);
		StartCoroutine(ShowGoodEffect(worldPos));
		foreach (Case c in AllCases)
		{
			if (!(c == null) && c.lineIndex > deletedLineIndex)
			{
				int oldIndex = c.lineIndex;
				c.lineIndex--;
				Vector3 newPos = c.transform.position + Vector3.down * lineHeight;
				c.transform.DOMoveY(newPos.y, 0.3f).SetEase(Ease.OutQuad).OnComplete(delegate
				{
					Debug.Log($"{c.name} 애니메이션 완료: {oldIndex} → {c.lineIndex}");
				});
			}
		}
	}

	private IEnumerator ShowGoodEffect(Vector3 worldPosition)
	{
		int randomIndex = Random.Range(0, goodEffectPrefabs.Length);
		GameObject selectedPrefab = goodEffectPrefabs[randomIndex];
		Vector3 screenPos = Camera.main.WorldToScreenPoint(worldPosition);
		GameObject goodEffect = Object.Instantiate(selectedPrefab, uiCanvas.transform);
		RectTransform rectTransform = goodEffect.GetComponent<RectTransform>();
		RectTransformUtility.ScreenPointToLocalPointInRectangle(uiCanvas.transform as RectTransform, screenPos, uiCanvas.worldCamera, out var uiPos);
		rectTransform.localPosition = uiPos;
		float duration = 0.8f;
		float elapsed = 0f;
		Vector3 originalScale = rectTransform.localScale;
		CanvasGroup canvasGroup = goodEffect.GetComponent<CanvasGroup>();
		if (canvasGroup == null)
		{
			canvasGroup = goodEffect.AddComponent<CanvasGroup>();
		}
		while (elapsed < duration)
		{
			elapsed += Time.deltaTime;
			float t = elapsed / duration;
			float scale = Mathf.Lerp(1.2f, 0f, t);
			rectTransform.localScale = originalScale * scale;
			canvasGroup.alpha = Mathf.Lerp(1f, 0f, t);
			yield return null;
		}
		Object.Destroy(goodEffect);
	}
}
