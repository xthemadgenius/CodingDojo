using System;

namespace WizardNinjaSamurai
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            health = 200;
        }

        public override int Attack(Human target)
        {
            if(target.health < 50)
            {
                Console.WriteLine($"{Name} has defeated {target.health}");
                target.health = 0;
            }
            else
            {
                base.Attack(target);
            }
            return target.health;
        }

        public void Meditate()
        {
            health = 200;
            Console.WriteLine($"{Name} is back to Full Health");
        }
    }
}