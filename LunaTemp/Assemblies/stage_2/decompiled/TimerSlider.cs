using UnityEngine;
using UnityEngine.UI;

public class TimerSlider : MonoBehaviour
{
	public Slider timerSlider;

	public float totalTime = 10f;

	private float timeLeft;

	private void Start()
	{
		timeLeft = totalTime;
		timerSlider.maxValue = totalTime;
		timerSlider.value = totalTime;
	}

	private void Update()
	{
		if (timeLeft > 0f)
		{
			timeLeft -= Time.deltaTime;
			timerSlider.value = timeLeft;
			if (timeLeft <= 0f)
			{
				timeLeft = 0f;
			}
		}
	}
}
