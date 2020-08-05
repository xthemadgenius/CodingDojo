using System;

namespace TerminalRPGEncounter
{
    class Zombie : Enemy
    {
        public Zombie(string name) : base(name, 100)
        {
            Console.WriteLine("I am Zombie");
        }
    }
}