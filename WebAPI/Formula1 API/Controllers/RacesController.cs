namespace Formula1_API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1_API.Models;
using Formula1_API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class RacesController : ControllerBase
{
    private readonly Formula1Context context;

    public RacesController(Formula1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> Get()
    {
        try
        {
            List<Race> races = await context.Races.ToListAsync();

            if (races == null)
            {
                return NotFound();
            }
            return Ok(races);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> GetById(int id)
    {
        try
        {
            Race? race = await context.Races.FindAsync(id);

            if (race == null)
            {
                return NotFound();
            }
            return Ok(race);
        }
        catch
        {
            return StatusCode(500);
        }
    }
}