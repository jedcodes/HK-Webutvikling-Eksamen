
namespace Formula1_API.Interfaces;

public interface ITeam
{
    int Id { get; set; }
    string? Manufacturer { get; set; }
    string? Image { get; set; }
    int Driver1Id { get; set; }
    int Driver2Id { get; set; }
}
