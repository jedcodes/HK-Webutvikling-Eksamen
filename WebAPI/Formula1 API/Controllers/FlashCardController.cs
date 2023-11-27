namespace Formula1_API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1_API.Models;
using Formula1_API.Contexts;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]

public class FlashCardController : ControllerBase
{
    private readonly Formula1Context context;

    public FlashCardController(Formula1Context _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<FlashCard>>> GetAll()
    {
        try
        {
            List<FlashCard> flashCards = await context.FlashCards.ToListAsync();
            if (flashCards == null)
            {
                return NotFound();
            }
            return Ok(flashCards);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Adding new flashcard to the api
    [HttpPost]
    public async Task<ActionResult> Post(FlashCard newFlashCard)
    {
        try
        {

            if (newFlashCard == null)
            {
                return NotFound();
            }
            else
            {
                context.FlashCards.Add(newFlashCard);
                await context.SaveChangesAsync();
                return NoContent();
            }

        }
        catch
        {
            return StatusCode(500);
        }
    }

    // Updating existing flashcard
    [HttpPut]
    public async Task<IActionResult> Put(FlashCard updatedFlashCard)
    {
        try
        {
            if (updatedFlashCard == null)
            {
                return NotFound();
            }
            else
            {
                context.Entry(updatedFlashCard).State = EntityState.Modified;
                await context.SaveChangesAsync();
                return NoContent();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            FlashCard? flashCard = await context.FlashCards.FindAsync(id);

            if (flashCard != null)
            {
                context.FlashCards.Remove(flashCard);
                await context.SaveChangesAsync();
                return NoContent();
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