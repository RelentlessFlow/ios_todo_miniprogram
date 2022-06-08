using Microsoft.AspNetCore.Mvc;
using mini_cloud.API.Moduls;
using mini_cloud.Databases.Entities;
using mini_cloud.Infrastructure.Services.CommonServices.Interface;

namespace mini_cloud.API.Controllers;

[Route("api/todo")]
[ApiController]
public class TodoController: ControllerBase
{
    private readonly ITodoRepository _todoRepository;
    public TodoController(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository ?? throw new ArgumentException(nameof(todoRepository));
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ToList>>> GetTodos()
    {
        return Ok(await _todoRepository.GetTodos());
    }
    [HttpPost]
    public async Task<ActionResult<IEnumerable<ToList>>> addTodo(TodoAddDto dto)
    {
        _todoRepository.AddTodo(new Todo
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            Remark = dto.Remark,
            DateTime = dto.DateTime,
            Flag = dto.Flag,
            Complete = dto.Complete,
            ToListId = dto.ToListId
        });
        await _todoRepository.SaveAsync();
        return Ok();
    }
    [HttpDelete]
    [Route("/api/todo/{id}")]
    public async Task<ActionResult<IEnumerable<ToList>>> deleteTodo(Guid id)
    {
        var todo = await _todoRepository.GetTodo(id);
        _todoRepository.DeleteTodo(todo);
        await _todoRepository.SaveAsync();
        return Ok();
    }
    
    [HttpPut]
    [Route("/api/todo/{id}/flag")]
    public async Task<ActionResult<IEnumerable<ToList>>> changeTodoFlag(Guid id, bool ?flag)
    {
        var todo = await _todoRepository.GetTodo(id);
        if (flag == null)
        {
            todo.Flag = !todo.Flag;
        }
        else
        {
            todo.Flag = (bool)flag;
        }
        await _todoRepository.SaveAsync();
        return Ok();
    }
    
    [HttpPut]
    [Route("/api/todo/{id}/complete")]
    public async Task<ActionResult<IEnumerable<ToList>>> changeTodoComplete(Guid id, bool ? complete)
    {
        var todo = await _todoRepository.GetTodo(id);
        if (complete == null)
        {
            todo.Complete = !todo.Complete;
        }
        else
        {
            todo.Complete = (bool)complete;
        }
        await _todoRepository.SaveAsync();
        return Ok();
    }
}
