namespace Formula1_API.Models;

using Formula1_API.Interfaces;

public class FlashCard
{
    public int Id { get; set; }
    public string? Answer { get; set; }
    public string? Question { get; set; }
    public string? Option1 { get; set; }
    public string? Option2 { get; set; }
    public string? Option3 { get; set; }
}