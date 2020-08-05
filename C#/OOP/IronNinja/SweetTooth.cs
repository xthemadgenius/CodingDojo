using System;

namespace  IronNinja
{
    class SweetTooth : Ninja
    {
        public override bool IsFull
        {
            get
            {
                if (calorieIntake >= 1500)
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
                Console.WriteLine("SweetTooth is Full");
            }
            else
            {
                if(item.IsSweet)
                {
                    calorieIntake += item.Calories + 10;
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