using System;

namespace Phone
{
    class Program
    {
        static void Main(string[] args)
        {
            Galaxy s8 = new Galaxy("S8", 92, "Sprint", "Hey Spongeboy Pick Up");
            Nokia unstoppable = new Nokia("Unstoppable", 92, "Verizon", "Hey Daddy its your Mistress");

            s8.DisplayInfo();
            Console.WriteLine(s8.Ring());
            Console.WriteLine(s8.Unlock());
            Console.WriteLine(s8.Ring() + "\n");

            unstoppable.DisplayInfo();
            Console.WriteLine(unstoppable.Ring());
            Console.WriteLine(unstoppable.Unlock());
            Console.WriteLine(unstoppable.Ring() + "\n");

        }
    }
}
