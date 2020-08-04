using System;
using System.Collections.Generic;

namespace HungryNinja
{
    public class Buffet
    {
        public List<Food> Menu;
        
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Beans", 100, false, false),
                new Food("Red Rice", 200, true, false),
                new Food("Tacos", 600, false, false),
                new Food("Flan", 700, false, true),
                new Food("Carnitas", 800, false, true),
                new Food("Bondigas", 800, true, false),
                new Food("Elote", 350, false, false)
            };
        }
        public Food Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(8)];
        }
    }
}