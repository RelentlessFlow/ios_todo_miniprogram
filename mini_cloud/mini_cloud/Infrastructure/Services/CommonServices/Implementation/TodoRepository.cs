using Microsoft.EntityFrameworkCore;
using mini_cloud.Databases.Data;
using mini_cloud.Databases.Entities;
using mini_cloud.Infrastructure.Services.CommonServices.Interface;

namespace mini_cloud.Infrastructure.Services.CommonServices.Implementation;

public class TodoRepository:ITodoRepository
{
    private readonly RoutineDbContext _context;
    
    public TodoRepository(RoutineDbContext context)
    {
        _context = context ?? throw new ArgumentException(nameof(context));
    }
    
    public void AddTodo(Todo todo)
    {
        _context.Todos.Add(todo);
    }

    public void UpdateToDo(Todo todo)
    {
        _context.Entry(todo).State = EntityState.Modified;
    }

    public void DeleteTodo(Todo todo)
    {
        _context.Todos.Remove(todo);
    }

    public async Task<Todo> GetTodo(Guid id)
    {
        return await _context.Todos.FirstAsync(x => x.Id == id);
    }

    public async Task<IEnumerable<Todo>> GetTodos()
    {
        var list = await _context.Todos.ToListAsync();
        return list;
    }

    public async Task<bool> TodoIsExits(Guid id)
    {
        return await _context.Todos.AnyAsync(x => x.Id == id);
    }

    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() >= 0;
    }
}