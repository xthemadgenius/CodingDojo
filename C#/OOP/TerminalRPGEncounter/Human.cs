using System;

namespace TerminalRPGEncounter
{
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        public int health;

        public int Health
        {
            get
            {
                return health;
            }
            set {}
        }

        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string name, int strength, int intelligence, int dexterity, int healthPoints)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            health = healthPoints;
        }

        public virtual int Attack(Enemy target)
        {
            int dmg = Strength * 3;
            target.health -= dmg;
            Console.WriteLine($"{Name} atthacked {target.Name} making {dmg} damage");
            return dmg;
        }

        public virtual int Attack(Enemy target, int dmg)
        {
            target.health -= dmg;
            Console.WriteLine($"{Name} atthacked {target.Name} making {dmg} damage");
            return dmg;
        }
    }
}