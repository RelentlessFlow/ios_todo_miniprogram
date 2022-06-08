using Microsoft.AspNetCore.Mvc;
using mini_cloud.Databases.Entities;
using mini_cloud.Infrastructure.Services.CommonServices.Interface;

namespace mini_cloud.API.Controllers;

[Route("api/tolist")]
[ApiController]
public class ToListController: ControllerBase
{
    private readonly IToListRepository _toListRepository;
    private readonly ITodoRepository _todoRepository;
    public ToListController(IToListRepository toListRepository, ITodoRepository todoRepository)
    {
        _toListRepository = toListRepository ?? throw new ArgumentException(nameof(toListRepository));
        _todoRepository = todoRepository ?? throw new ArgumentException(nameof(todoRepository));
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ToList>>> GetToLists()
    {
        var list = await _toListRepository.GetToLists();
        return Ok(list);
    }
    [HttpGet]
    [Route("/api/tolists/", Name = nameof(GetToListsAndTodos))]
    public async Task<ActionResult<IEnumerable<ToList>>> GetToListsAndTodos()
    {
        var list = await _toListRepository.GetToListsAndTodos();
        return Ok(list);
    }
    [HttpGet]
    [Route("/api/tolist/{id}", Name = nameof(GetToList))]
    public async Task<ActionResult<ToList>> GetToList(Guid id)
    {
        return Ok(await _toListRepository.GetToList(id));
    }

    [HttpPost]
    public async Task<IActionResult> AddTodos(string iconColor, string title)
    {
        _toListRepository.AddToList(new ToList
        {
            Id = Guid.NewGuid(),
            IconColor = iconColor,
            Title = title,
        });
        await _toListRepository.SaveAsync();
        return Ok();
    }
}