using Microsoft.EntityFrameworkCore; 

namespace TheWall.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        
        public DbSet<User> users {get;set;}

        public DbSet<Message> messages { get; set; }

        public DbSet<Comment> comments { get; set; }
    }
}