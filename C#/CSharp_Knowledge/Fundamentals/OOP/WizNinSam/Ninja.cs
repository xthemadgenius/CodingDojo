using System;

namespace WizNinSam
{
    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
            
        }

        public Ninja(string name, int str, int intel, int dex, int hp) : base(name, str, intel, dex, hp)
        {}

        public override int Attack(Human target)
        {
            int crit = 0;
            Random rand = new Random();
            if(rand.Next(1,6) == 1)
            {
                crit = 10;
            }
            int dmg = 5 * Dexterity;

            string message = $"{Name} snuck up and attacked {target.Name}. ";
            target.Health -= dmg + crit;
            if(crit == 0)
            {
                message += $"{target.Name} took {dmg} damage!";
            }
            else
            {
                message += $"{Name} dealt a critical blow, dealing a total of {dmg+crit} damage!";
            }
            System.Console.WriteLine(message);
            return target.Health;
        }

        public void Steal(Human target)
        {
            target.Health -= 5;
            if(Health < maxHP - 5)
            {
                Health += 5;
            }
            else
            {
                Health = maxHP;
            }
            System.Console.WriteLine($"{Name} snuck up and stole some health and coins from {target.Name}, dealing 5 damage and healing up 5 health.");
        }
    }
}