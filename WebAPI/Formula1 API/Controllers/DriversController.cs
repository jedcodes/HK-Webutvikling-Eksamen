namespace Formula1_API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1_API.Models;
using Formula1_API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class DriversController : ControllerBase
{


    // deklarer context klassen
    private readonly Formula1Context context;

    public DriversController(Formula1Context _context)
    {
        context = _context;
    }


    // Get All method kontroller
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        {
            List<Driver> drivers = await context.Drivers.ToListAsync();

            if (drivers != null)
            {
                return Ok(drivers);
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

    // Get By Id method kontroller
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> GetById(int id)
    {
        try
        {
            Driver? driver = await context.Drivers.FindAsync(id);

            if (driver != null)
            {
                return Ok(driver);
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

    // Get By Name method kontroller
    [HttpGet("name/{name}")]
    public async Task<ActionResult<Driver>> GetByName(string name)
    {
        try
        {
            // Case-insensitive search for the driver by name
            Driver? driver = await context.Drivers
             .FirstOrDefaultAsync(d => d.Name.ToLower() == name.ToLower());

            if (driver != null)
            {
                return Ok(driver);
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