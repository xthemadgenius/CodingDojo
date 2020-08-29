using Microsoft.EntityFrameworkCore;

namespace TVShows.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options){}

        public DbSet<User> Users { get; set; }
        public DbSet<Show> Shows { get; set; }
        public DbSet<Network> Networks { get; set; }
        public DbSet<ShowOnNetwork> ShowOnNetworks { get; set; }
    }
}