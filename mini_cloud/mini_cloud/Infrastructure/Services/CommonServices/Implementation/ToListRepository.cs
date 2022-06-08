using Microsoft.EntityFrameworkCore;
using mini_cloud.Databases.Data;
using mini_cloud.Databases.Entities;
using mini_cloud.Infrastructure.Services.CommonServices.Interface;

namespace mini_cloud.Infrastructure.Services.CommonServices.Implementation;

public class ToListRepository: IToListRepository
{
    private readonly RoutineDbContext _context;
    
    public ToListRepository(RoutineDbContext context)
    {
        _context = context ?? throw new ArgumentException(nameof(context));
    }
    
    public void AddToList(ToList todList)
    {
        _context.ToLists.Add(todList);
    }

    public void UpdateToList(ToList toList)
    {
        _context.Entry(toList).State = EntityState.Modified;
    }

    public void DeleteToList(ToList toList)
    {
        _context.ToLists.Remove(toList);
    }

    public async Task<ToList> GetToList(Guid id)
    {
        return await _context.ToLists.FirstAsync(x => x.Id == id);
    }

    public async Task<IEnumerable<ToList>> GetToLists()
    {
        return await _context.ToLists.ToListAsync();
    }

    public async Task<IEnumerable<ToList>> GetToListsAndTodos()
    {
        var toLists = await _context.ToLists.ToListAsync();
        foreach (var toList in toLists)
        {
            var todo =
                await _context.Todos.Where(x => x.ToListId == toList.Id).ToListAsync();
            toList.Todos = todo;
        }
        return toLists;
    }

    public async Task<bool> ToListIsExits(Guid id)
    {
        return await _context.ToLists.AnyAsync(x => x.Id == id);
    }

    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() >= 0;
    }
}