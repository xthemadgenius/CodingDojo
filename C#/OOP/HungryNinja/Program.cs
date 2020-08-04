using System;

namespace HungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet FogoDeChio = new Buffet();
            Ninja Billy = new Ninja();
            while(!Billy.IsFull)
            {
                Billy.Eat(FogoDeChio.Serve());
                Console.WriteLine($"Billy ate: {FogoDeChio.Serve().Name}.");
                Console.WriteLine($"Is Billy full yet? {Billy.IsFull}");
            }
            Console.WriteLine("Buffet Works!!");
        }
    }
}
