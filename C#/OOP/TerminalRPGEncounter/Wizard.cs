using System;

namespace TerminalRPGEncounter
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name, 3, 25, 3, 50)
        {
            Console.WriteLine($"I am a Wizard, My Name is {Name}");
        }
    }
}