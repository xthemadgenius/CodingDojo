 using Microsoft.EntityFrameworkCore;
namespace O2MIntro.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class MyContext : DbContext 
    { 
        public MyContext(DbContextOptions options) : base(options) { }

        public DbSet<Alien> Aliens { get; set; }
        public DbSet<HomePlanet> HomePlanets { get; set; }
    }
}