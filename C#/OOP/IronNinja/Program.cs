using System;

namespace IronNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            SweetTooth candy = new SweetTooth();
            SpiceHound jalapeno = new SpiceHound();
            Buffet silverSpoon = new Buffet();
            while(!candy.IsFull)
            {
                candy.Consume(silverSpoon.Serve());
            }
            while(!jalapeno.IsFull)
            {
                jalapeno.Consume(silverSpoon.Serve());
            }
            Ninja winner;
            string title;
            if(candy.ConsumptionHistory.Count >= jalapeno.ConsumptionHistory.Count)
            {
                winner = candy;
                title = "Candy";
            }
            else{
                winner = jalapeno;
                title = "Jalapeno";
            }
            Console.WriteLine($"{title} won, they ate {winner.ConsumptionHistory.Count} items!");
        }
    }
}
