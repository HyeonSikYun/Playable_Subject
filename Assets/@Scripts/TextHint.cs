using UnityEngine;
using TMPro;
using DG.Tweening;

public class TextHint : MonoBehaviour
{
    public TextMeshProUGUI hintText;  
    public float scaleAmount = 1.2f;     
    public float duration = 0.6f;        

    void Start()
    {
        AnimateLoop();
    }

    void AnimateLoop()
    {
        hintText.transform.localScale = Vector3.one;  

        hintText.transform
            .DOScale(Vector3.one * scaleAmount, duration)
            .SetLoops(-1, LoopType.Yoyo)
            .SetEase(Ease.InOutSine); 
    }
}
