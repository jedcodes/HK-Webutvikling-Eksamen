namespace Formula1_API.Models;
using Formula1_API.Interfaces;

public class Driver : IDriver
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Nationality { get; set; }
    public string? Image { get; set; }
    public int? Points { get; set; }
    public int? Ranking { get; set; }
    public string? Flag { get; set; }
}