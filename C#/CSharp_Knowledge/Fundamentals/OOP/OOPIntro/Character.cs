using System;

namespace OOPIntro
{
    class Character
    {
        private string _name { get; set; }
        public string Name { 
            get { return $"I am the great {this._name}, champion of the Dojo!"; }
            set { this._name = value; } 
        }
        public int Health { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constitution { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }

        // public DateTime Birthday { get; set; }
        // public int Age {
        //     get {
        //         return (DateTime.Today - Birthday).Days / 365;
        //     }
        // }

        public Character()
        {
            _name = "Anonymous";
            // Birthday = DateTime.Now;
            Health = 10;
            Strength = 10;
            Dexterity = 10; 
            Constitution = 10;
            Intelligence = 10;
            Wisdom = 10;
            Charisma = 10;
        }

        

        public Character(string name, int hp = 10, int str = 10, int dex = 10, int con = 10, int intel = 10, int wis = 10, int cha = 10)
        {
            _name = name;
            Health = hp;
            Strength = str;
            Dexterity = dex;
            Constitution = con;
            Intelligence = intel;
            Wisdom = wis;
            Charisma = cha;
        }

        public void Attack(Character target)
        {
            int dmg = (int)(0.3 * Strength);
            target.Health -= dmg;
            System.Console.WriteLine($"{_name} attacks {target._name} for {dmg} damage!");
        }
    }
}