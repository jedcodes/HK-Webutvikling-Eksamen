namespace Formula1_API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1_API.Models;
using Formula1_API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class TeamsController : ControllerBase
{
    private readonly Formula1Context context;

    public TeamsController(Formula1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Team>>> Get()
    {
        try
        {
            List<Team> teams = await context.Teams.ToListAsync();

            if (teams == null)
            {
                return NotFound();
            }
            return Ok(teams);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Team>> GetById(int id)
    {
        try
        {
            Team? team = await context.Teams.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }
            return Ok(team);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Get By Name method kontroller
    [HttpGet("[action]/{name}")]
    public async Task<ActionResult<Team>> GetByName(string name)
    {
        try
        {
            // Case-insensitive search for the driver by name
            Team? team = await context.Teams
             .FirstOrDefaultAsync(d => d.Manufacturer.ToLower() == name.ToLower());

            if (team != null)
            {
                return Ok(team);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}