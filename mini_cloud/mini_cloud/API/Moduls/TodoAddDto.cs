namespace mini_cloud.API.Moduls;

public class TodoAddDto
{
    public string Name { get; set; }
    public string Remark { get; set; } = "";
    public DateTime DateTime { get; set; } = DateTime.Now;
    public bool Flag { get; set; }
    public bool Complete { get; set; } = false;
    public Guid ToListId { get; set; }
}