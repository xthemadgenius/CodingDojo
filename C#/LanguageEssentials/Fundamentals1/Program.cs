using System;

namespace Fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            // int large = 255;
            // for(int i = 1; i <= large; i++)
            // {
            //     Console.WriteLine(i);
            // }
            // int hundo = 100;
            // for(int i = 1; i <= hundo; i++)
            // {
            //     if(i % 3 == 0)
            //     {
            //         Console.WriteLine(i);
            //     }
            //     else if(i % 5 == 0)
            //     {
            //         Console.WriteLine(i);
            //     }
            // }
            int gudo = 100;
            for(int i = 1; i <= gudo; i++)
            {
                if(i % 5 == 0 && i % 3 == 0)
                {
                    Console.WriteLine("FizzBuzz");
                }
                else if(i % 3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                else if(i % 5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
            }
        }
    }
}
