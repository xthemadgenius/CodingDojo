using System;

namespace TerminalRPGEncounter
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name, 3, 25, 3, 200)
        {
            Console.WriteLine($"I am a Samurai, My Name is {Name}");
        }
    }
}
}