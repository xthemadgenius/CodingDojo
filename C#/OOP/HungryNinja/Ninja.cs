using System;
using System.Collections.Generic;

namespace HungryNinja
{
    public class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;

        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>{};
        }

        public bool IsFull 
        {
            get
            {
                if(calorieIntake > 1200)
                {
                    return true;
                }
                return false;
            }
        }

        public void Eat(Food item)
        {
            FoodHistory.Add(item);
            calorieIntake += item.Calories;
        }
    }
}