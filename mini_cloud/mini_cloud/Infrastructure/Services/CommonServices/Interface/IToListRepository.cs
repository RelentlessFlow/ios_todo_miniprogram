using mini_cloud.Databases.Entities;

namespace mini_cloud.Infrastructure.Services.CommonServices.Interface
{
    public interface IToListRepository
    {
        void AddToList(ToList todList);
        void UpdateToList(ToList toList);
        void DeleteToList(ToList toList);
        Task<ToList> GetToList(Guid id);
        Task<IEnumerable<ToList>> GetToLists();
        Task<IEnumerable<ToList>> GetToListsAndTodos();
        Task<bool> ToListIsExits(Guid id);
        Task<bool> SaveAsync();
    }
}