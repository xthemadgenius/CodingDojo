using System;

namespace TerminalRPGEncounter
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name, 3, 25, 3, 50)
        {
            
        }
        public int Heal(Human target)
        {
            int heal = 10 * Intelligence;
            target.health += heal;
            Console.WriteLine($"{Name} healed {target.Name} added {heal} health!");
            return target.health;
        }

        public override int Attack(Enemy target)
        {
            int dmg = Intelligence * 5;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} health points!");
            return target.health;
        }
    }
}