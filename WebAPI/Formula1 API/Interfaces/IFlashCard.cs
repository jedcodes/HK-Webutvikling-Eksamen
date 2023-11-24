namespace Formula1_API.Interfaces;

public interface IFlashCard
{
    int Id { get; set; }
    string Answer { get; set; }
    string Question { get; set; }
    string Option1 { get; set; }
    string Option2 { get; set; }
    string Option3 { get; set; }
}