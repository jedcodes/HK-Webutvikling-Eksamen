namespace Formula1_API.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class ImageUploadController : ControllerBase
{

    private readonly IWebHostEnvironment environment;

    public ImageUploadController(IWebHostEnvironment _environment)
    {
        environment = _environment;
    }

    [HttpPost]
    public IActionResult PostImage(IFormFile formFile)
    {
        try
        {
            string webRootPath = environment.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/drivers/{formFile.FileName}");

            using (var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                formFile.CopyTo(fileStream);
            }
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    public string Get()
    {
        return "Hello, World";
    }
}
