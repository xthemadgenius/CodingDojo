using System;
using System.Collections.Generic;


namespace OOPIntro
{
    class Program
    {
        static void Main(string[] args)
        {
            Character Bob = new Character("Bob", intel:9, wis: 8);
            Character Anon = new Character();

            Bob.Attack(Anon);

            // System.Console.WriteLine(Bob.Age);
        }
    }
}
