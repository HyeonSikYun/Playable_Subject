using UnityEngine;

public class ItemCell : MonoBehaviour
{
	public int x;

	public int y;

	public int itemId;

	private GameManager manager;

	private Renderer rend;

	public void Init(int x, int y, int id, GameManager gm)
	{
		this.x = x;
		this.y = y;
		itemId = id;
		manager = gm;
		rend = GetComponent<Renderer>();
	}

	public void SetPosition(int newX, int newY)
	{
		x = newX;
		y = newY;
	}

	private void OnMouseDown()
	{
		manager.OnItemSelected(this);
	}

	public void Highlight(bool on)
	{
		if (rend != null)
		{
			rend.material.color = (on ? Color.yellow : Color.white);
		}
	}
}
