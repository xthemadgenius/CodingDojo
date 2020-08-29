using Microsoft.EntityFrameworkCore;

namespace EntityIntro.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) {}

        public DbSet<Intruder> Intruders { get; set; }
    }
}