using mini_cloud.Databases.Entities;

namespace mini_cloud.Infrastructure.Services.CommonServices.Interface;

public interface ITodoRepository
{
    void AddTodo(Todo todo);
    void UpdateToDo(Todo todo);
    void DeleteTodo(Todo todo);
    Task<Todo> GetTodo(Guid id);
    Task<IEnumerable<Todo>> GetTodos();
    Task<bool> TodoIsExits(Guid id);
    Task<bool> SaveAsync();
}