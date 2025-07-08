using UnityEngine;
using UnityEngine.UI;

public class TimerSlider : MonoBehaviour
{
    public Slider timerSlider;
    public float totalTime = 10f;

    private float timeLeft;

    void Start()
    {
        timeLeft = totalTime;
        timerSlider.maxValue = totalTime;
        timerSlider.value = totalTime;
    }

    void Update()
    {
        if (timeLeft > 0)
        {
            timeLeft -= Time.deltaTime;
            timerSlider.value = timeLeft;

            if (timeLeft <= 0)
            {
                timeLeft = 0;
            }
        }
    }
}
