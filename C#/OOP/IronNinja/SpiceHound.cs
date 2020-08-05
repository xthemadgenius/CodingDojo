using System;

namespace  IronNinja
{
    class SpiceHound : Ninja
    {
        public override bool IsFull
        {
            get
            {
                if (calorieIntake >= 1200)
                {
                    return true;
                }
                return false;
            }
        }
        public override void Consume(IConsumable item)
        {
            if(IsFull)
            {
                Console.WriteLine("SpiceHound is Full");
            }
            else
            {
                if(item.IsSpicy)
                {
                    calorieIntake += item.Calories - 5;
                }
                else
                {
                    calorieIntake += item.Calories;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
            }
        }
    }
}