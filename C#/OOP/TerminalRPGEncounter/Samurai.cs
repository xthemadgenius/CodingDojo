using System;

namespace TerminalRPGEncounter
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name, 3, 3, 3, 200)
        {
            
        }

        public void Meditate()
        {
            health = 200;
            Console.WriteLine($"{Name} restored their health");
        }
        public override int Attack(Enemy target)
        {
            base.Attack(target);
            if(target.health < 50)
            {
                target.health = 0;
                Console.WriteLine($"{Name} defeated {target.Name}!");
            }
            return target.health;
        }
    }
}