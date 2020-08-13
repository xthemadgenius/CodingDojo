using Microsoft.EntityFrameworkCore; 

namespace ChefsNDishes.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        
                    // This is where the models go
        public DbSet<Chef> Chefs {get;set;}
        public DbSet<Dish> Dishes {get;set;}
    }
}