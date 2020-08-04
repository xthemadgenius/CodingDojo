using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            Human Tyrone = new Human("Tyrone");
            Human Lleroy = new Human("LLeroy", 15, 34,11, 300);
            Tyrone.Attack(Lleroy);
            Console.WriteLine(Lleroy.health);
        }
    }
}
