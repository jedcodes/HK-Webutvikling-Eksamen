namespace Formula1_API.Interfaces;

public interface IDriver
{
    int Id { get; set; }
    string? Name { get; set; }
    int Age { get; set; }
    string? Nationality { get; set; }
    string? Image { get; set; }
    int? Points { get; set; }
    int? Ranking { get; set; }
    string? Flag { get; set; }
}
