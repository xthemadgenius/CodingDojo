using System;
using System.Collections.Generic;

namespace IronNinja
{
    class Buffet
    {
        public List<IConsumable> Menu;
        public Buffet()
        {
            Menu = new List<IConsumable>()
            {
                new Food("Tortas", 1200, false, false),
                new Food("Horchata", 250, false, true),
                new Food("Ceviche", 1000, true, false),
                new Food("Tacos", 800, true, false),
                new Food("Burrito", 1450, true, false),
                new Food("Flautas", 1200, false, false),
                new Food("Bondigas", 920, true, false),
                new Food("Tamarindo", 100, true, true),
                new Food("Sanguich", 740, false, false),
                new Food("Takis", 450, true, false),
            };
        }
        public IConsumable Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(10)];
        }
    }
}