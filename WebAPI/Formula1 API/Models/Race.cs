namespace Formula1_API.Models;
using Formula1_API.Interfaces;

public class Race : IRace
{
    public int Id { get; set; }
    public string? WinnerName { get; set; }
    public string? WinnerTime { get; set; }
    public string? GrandPrix { get; set; }
    public int NumberOfLaps { get; set; }
}
