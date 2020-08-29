using Microsoft.EntityFrameworkCore;
namespace M2MIntro.Models
{ 
    public class MyContext : DbContext 
    { 
        public MyContext(DbContextOptions options) : base(options) { }


        public DbSet<Alien> Aliens { get; set; }
        public DbSet<Planet> Planets { get; set; }
        public DbSet<Visitor> Visitors { get; set; }
    }
}