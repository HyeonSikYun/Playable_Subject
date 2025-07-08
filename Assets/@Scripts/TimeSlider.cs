using UnityEngine;
using UnityEngine.UI;

public class TimerSlider : MonoBehaviour
{
    public Slider timerSlider;
    public float totalTime = 10f;
    public GameObject resultPanel;  // ⬅ 패널 연결

    private float timeLeft;
    private bool isFinished = false;

    void Start()
    {
        timeLeft = totalTime;
        timerSlider.maxValue = totalTime;
        timerSlider.value = totalTime;

        if (resultPanel != null)
        {
            resultPanel.SetActive(false); // 시작 시 패널 숨김
        }
    }

    void Update()
    {
        if (isFinished) return;

        if (timeLeft > 0)
        {
            timeLeft -= Time.deltaTime;
            timerSlider.value = timeLeft;

            if (timeLeft <= 0)
            {
                timeLeft = 0;
                isFinished = true;

                if (resultPanel != null)
                {
                    resultPanel.SetActive(true); // 패널 표시
                }
            }
        }
    }
}
