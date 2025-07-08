using System.Collections.Generic;
using UnityEngine;

public class PuzzleManager : MonoBehaviour
{
	public static PuzzleManager Instance;

	public List<Case> AllCases;

	private void Awake()
	{
		Instance = this;
		if (AllCases == null || AllCases.Count == 0)
		{
			Debug.LogWarning("AllCases가 비어 있거나 null입니다!");
			return;
		}
		foreach (Case c in AllCases)
		{
			if (c == null)
			{
				Debug.LogWarning("AllCases에 null 케이스가 포함되어 있습니다!");
				continue;
			}
			Debug.Log(string.Format("Case: {0}, LineIndex: {1}, CaseColor: {2}, 병: {3}", c.name, c.lineIndex, c.CaseColor, (c.GetCurrentBottle() != null) ? c.GetCurrentBottle().name : "null"));
		}
		TestInitialLines();
	}

	[ContextMenu("Test Initial Lines")]
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
			Debug.Log($"초기 라인 {lineIndex} 테스트 시작");
			CheckAndClearLine(lineIndex);
		}
	}

	public void CheckAndClearLine(int lineIndex)
	{
		if (AllCases == null || AllCases.Count == 0)
		{
			Debug.LogWarning("AllCases가 null이거나 비어 있습니다!");
			return;
		}
		List<Case> lineCases = AllCases.FindAll((Case c) => c != null && c.lineIndex == lineIndex);
		Debug.Log($"라인 {lineIndex} 검사 시작, 케이스 개수: {lineCases.Count}");
		foreach (Case c2 in lineCases)
		{
			Debug.Log(string.Format("케이스: {0}, 비어 있음: {1}, 병: {2}, CaseColor: {3}", c2.name, c2.IsEmpty(), (c2.GetCurrentBottle() != null) ? c2.GetCurrentBottle().name : "null", c2.CaseColor));
		}
		if (IsLineMatching(lineCases))
		{
			Debug.Log($"라인 {lineIndex} 매치 성공! 병 삭제 처리");
			ClearLine(lineCases);
		}
		else
		{
			Debug.Log($"라인 {lineIndex} 매치 실패");
		}
	}

	private bool IsLineMatching(List<Case> line)
	{
		if (line == null || line.Count == 0)
		{
			Debug.LogWarning("라인에 케이스가 없거나 null입니다.");
			return false;
		}
		foreach (Case c in line)
		{
			if (c == null)
			{
				Debug.LogWarning("케이스가 null입니다.");
				return false;
			}
			if (c.IsEmpty())
			{
				Debug.Log("케이스 " + c.name + "가 비어 있습니다.");
				return false;
			}
			Bottle b = c.GetCurrentBottle();
			if (b == null)
			{
				Debug.Log("케이스 " + c.name + "에 병이 null입니다.");
				return false;
			}
			bool match = IsColorMatch(b.BottleColor, c.CaseColor);
			Debug.Log($"비교 결과: {match} / Bottle: {b.BottleColor}, Case: {c.CaseColor}");
			if (!match)
			{
				Debug.Log($"채널별 차이 - R: {Mathf.Abs(b.BottleColor.r - c.CaseColor.r)}, G: {Mathf.Abs(b.BottleColor.g - c.CaseColor.g)}, B: {Mathf.Abs(b.BottleColor.b - c.CaseColor.b)}, A: {Mathf.Abs(b.BottleColor.a - c.CaseColor.a)}");
				return false;
			}
		}
		return true;
	}

	private void ClearLine(List<Case> line)
	{
		foreach (Case c in line)
		{
			Bottle b = c.GetCurrentBottle();
			if (b != null)
			{
				Debug.Log("병 " + b.name + " 삭제 중 (케이스: " + c.name + ")");
				Object.Destroy(b.gameObject);
			}
			c.ClearBottle();
		}
	}

	private bool IsColorMatch(Color a, Color b, float tolerance = 0.05f)
	{
		return Mathf.Abs(a.r - b.r) < tolerance && Mathf.Abs(a.g - b.g) < tolerance && Mathf.Abs(a.b - b.b) < tolerance && Mathf.Abs(a.a - b.a) < tolerance;
	}
}
