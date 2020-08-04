using System;

namespace WizardNinjaSamurai
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            Intelligence = 25;
            health = 50;
        }

        public int Heal(Human target)
        {
            int heal = 10 * Intelligence;
            target.health += heal;
            Console.WriteLine($"{Name} healed {target.Name} for {heal} hit points!");
            return target.health;
        }

        public override int Attack (Human target)
        {
            int dmg = Intelligence * 5;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} hit points!");
            return target.health;
        }
    }
}