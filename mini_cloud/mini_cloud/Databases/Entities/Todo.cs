using Newtonsoft.Json;

namespace mini_cloud.Databases.Entities;

public class Todo
{
     public Guid Id { get; set; }
     public string Name { get; set; }
     public string Remark { get; set; }
     public DateTime DateTime { get; set; }
     public bool Flag { get; set; }
     public bool Complete { get; set; }
     public Guid ToListId { get; set; }
     
     [JsonIgnore] 
     public ToList ToList { get; set; }
     
}