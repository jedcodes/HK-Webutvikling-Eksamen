namespace Formula1_API.Contexts;

// Importere klassene 
using Microsoft.EntityFrameworkCore;
using Formula1_API.Models;

// Avring database klasse fra Entityframeworkcore
public class Formula1Context : DbContext
{
    public Formula1Context(DbContextOptions<Formula1Context> options) : base(options) { }

    public DbSet<Driver> Drivers { get; set; }
    public DbSet<Team> Teams { get; set; }
    public DbSet<Race> Races { get; set; }
}