using System;

namespace TerminalRPGEncounter
{
    class Spider : Enemy
    {
        public Spider(string name): base(name, 50)
        {
            Console.WriteLine("I am Spider");
        }
    }
}