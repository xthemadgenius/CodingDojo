using System;

namespace WizNinSam
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Wizard tim = new Wizard("Tim");
            Ninja joe = new Ninja("Joe");

            tim.Attack(joe);
            tim.Heal(joe);

            joe.Attack(tim);

            Samurai jack = new Samurai("Jack");

            jack.Attack(tim);
            joe.Steal(jack);
            jack.Attack(joe);
            jack.Attack(joe);
            jack.Attack(joe);
        }
    }
}
