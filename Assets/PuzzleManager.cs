using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class PuzzleManager : MonoBehaviour
{
    public static PuzzleManager Instance;
    public List<Case> AllCases;

    private void Awake()
    {
        Instance = this;
        if (AllCases == null || AllCases.Count == 0)
        {
            return;
        }
        // 초기 라인 매치 테스트
        TestInitialLines();
    }
    private void TestInitialLines()
    {
        // 모든 라인 인덱스에 대해 초기 매치 테스트
        var lineIndices = new HashSet<int>();
        foreach (var c in AllCases)
        {
            if (c != null) lineIndices.Add(c.lineIndex);
        }
        foreach (var lineIndex in lineIndices)
        {
            CheckAndClearLine(lineIndex);
        }
    }

    public void CheckAndClearLine(int lineIndex)
    {
        if (AllCases == null || AllCases.Count == 0)
        {
            return;
        }

        List<Case> lineCases = AllCases.FindAll(c => c != null && c.lineIndex == lineIndex);

        if (IsLineMatching(lineCases))
        {
            ClearLine(lineCases);
        }

    }

    private bool IsLineMatching(List<Case> line)
    {
        if (line == null || line.Count == 0)
        {
            return false;
        }

        foreach (var c in line)
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

            bool match = IsColorMatch(b.BottleColor, c.CaseColor, 0.05f);

            if (!match)
            {
                return false;
            }
        }
        return true;
    }

    private void ClearLine(List<Case> line)
    {
        if (line == null || line.Count == 0) return;

        int deletedLineIndex = line[0].lineIndex;

        foreach (var c in line)
        {
            if (c == null) continue;

            Bottle b = c.GetCurrentBottle();
            if (b != null)
            {
                Destroy(b.gameObject);
            }

            c.ClearBottle();
            AllCases.Remove(c);
            Destroy(c.gameObject);
        }

        DropLinesAbove(deletedLineIndex);
    }




    private bool IsColorMatch(Color a, Color b, float tolerance = 0.05f)
    {
        return Mathf.Abs(a.r - b.r) < tolerance &&
               Mathf.Abs(a.g - b.g) < tolerance &&
               Mathf.Abs(a.b - b.b) < tolerance &&
               Mathf.Abs(a.a - b.a) < tolerance;
    }

    private void DropLinesAbove(int deletedLineIndex)
    {
        float lineHeight = 1.65f; // 실제 라인 간 수직 간격

        foreach (var c in AllCases)
        {
            if (c == null) continue;

            if (c.lineIndex > deletedLineIndex)
            {
                int oldIndex = c.lineIndex;
                c.lineIndex--;

                Vector3 newPos = c.transform.position + Vector3.down * lineHeight;

                // 🎯 DOTween으로 자연스럽게 이동
                c.transform.DOMoveY(newPos.y, 0.3f)
                    .SetEase(Ease.OutQuad)
                    .OnComplete(() => Debug.Log($"{c.name} 애니메이션 완료: {oldIndex} → {c.lineIndex}"));
            }
        }
    }

}