using System;

namespace Basic13
{
    class Program
    {
        public static void printNumbers()
        {
            for(int i = 0; i <= 255; i ++)
            {
                Console.WriteLine(i);
            }
        }

        public static void printOdd()
        {
            for(int i = 0; i <= 255; i ++)
            {
                if(i % 2 != 0){
                    Console.WriteLine(i);
                }
            }
        }

        public static void PrintSum()
        {
            int sum = 0;
            for(int i = 0; i <= 255; i ++)
            {
                sum += i;
                Console.WriteLine($"New Number: {i} Sum: {sum}");
            }
        }

        static void Main(string[] args)
        {
            // printNumbers();
            // printOdd();
            PrintSum();
        }
    }
}
