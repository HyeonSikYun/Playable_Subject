using UnityEngine;
using UnityEngine.UI;

public class TimerSlider : MonoBehaviour
{
	public Slider timerSlider;

	public float totalTime = 10f;

	public GameObject resultPanel;

	private float timeLeft;

	private bool isFinished = false;

	private void Start()
	{
		timeLeft = totalTime;
		timerSlider.maxValue = totalTime;
		timerSlider.value = totalTime;
		if (resultPanel != null)
		{
			resultPanel.SetActive(false);
		}
	}

	private void Update()
	{
		if (isFinished || !(timeLeft > 0f))
		{
			return;
		}
		timeLeft -= Time.deltaTime;
		timerSlider.value = timeLeft;
		if (timeLeft <= 0f)
		{
			timeLeft = 0f;
			isFinished = true;
			if (resultPanel != null)
			{
				resultPanel.SetActive(true);
			}
		}
	}
}
