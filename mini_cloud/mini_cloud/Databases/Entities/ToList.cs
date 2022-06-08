namespace mini_cloud.Databases.Entities;

public class ToList
{
    public Guid Id { get; set; }
    public string IconColor { get; set; }
    public string Title { get; set; }
    public ICollection<Todo> Todos { get; set; }
}