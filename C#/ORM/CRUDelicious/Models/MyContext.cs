using Microsoft.EntityFrameworkCore; 
namespace CRUDelicious.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        
        public DbSet<Dish> Dishes {get;set;}
    }
}