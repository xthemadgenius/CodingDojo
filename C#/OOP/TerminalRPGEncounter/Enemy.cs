using System;

namespace TerminalRPGEncounter
{
    class Enemy
    {
        public string Name;
        public int health;
        public Enemy(string name, int healthPoints)
        {
            Name = name;
            health = healthPoints;
        }

        public void attack(Human target)
        {
            target.health -= 10;
            Console.WriteLine($"{Name} attacks {target.Name} for 10 damage.");
        }
        public void IsDead()
        {
            Console.WriteLine($"{Name} is Defeated.");
        }
    }
}