using System;

namespace Dojodachi.Models
{
    public class Dachi
    {
        public int happiness;
        public int fullness;
        public int energy;
        public int meals;

        public static int foodCost = 1;
        public static int playCost = 5;
        public static int workCost = 5;
        public static int sleepCost = 5;

        public Dachi()
        {
            happiness = 20;
            fullness = 20;
            energy = 50;
            meals = 3;
        }

        public Dachi(int happiness, int fullness, int energy, int meals)
        {
            this.happiness = happiness;
            this.fullness = fullness;
            this.energy = energy;
            this.meals = meals;
        }
    }
}