using System;

namespace TerminalRPGEncounter
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja naruto = new Ninja("Naruto");
            Samurai jack = new Samurai("Jack");
            Wizard merlin = new Wizard("Merlin");

            Spider charolette = new Spider("Charolette");
            Zombie trevor = new Zombie("Trevor");

            bool endGame = false;

            Console.WriteLine("Welcome to ...");
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine("NARNIA");
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine("Please enter your name...");
            string playerName = Console.ReadLine();
            System.Threading.Thread.Sleep(2000);
            Console.WriteLine($"Hello, {playerName}!");
            Console.WriteLine("You have a party that has a Wizard, a Ninja, amd a Samurai.");
            Console.WriteLine("Your party is traveling through a Forest");
            Console.WriteLine("Oh no a zombies and a spider are coming to fight you...");

            while(endGame == false)
            {
                Console.WriteLine("####################################");
                Console.WriteLine("Which character would you like to use?");
                Console.WriteLine("1 - Merlin Attacks Charolette");
                Console.WriteLine("2 - Naruto Attacks Charolette");
                Console.WriteLine("3 - Jack Attacks Charolette");
                Console.WriteLine("4 - Merlin Attacks Trevor");
                Console.WriteLine("5 - Naruto Attacks Trevor");
                Console.WriteLine("6 - Jack Attacks Trevor");
                Console.WriteLine("####################################");
                string playerChoice = Console.ReadLine();
                if (playerChoice == "1")
                {
                    merlin.Attack(charolette);
                }
                else if (playerChoice == "2")
                {
                    naruto.Attack(charolette);
                }
                else if (playerChoice == "3")
                {
                    jack.Attack(charolette);
                }
                else if (playerChoice == "4")
                {
                    merlin.Attack(trevor);
                }
                else if (playerChoice == "5")
                {
                    naruto.Attack(trevor);
                }
                else if (playerChoice == "6")
                {
                    jack.Attack(trevor);
                }
                else
                {
                    Console.WriteLine("Invalid selection :(");

                }
            }
        }
    }
}
