using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        // Random Array
        public static int[] RandomArray()
        {
            int[] randArr = new int[10];
            Random rand = new Random();
            for(int i = 0; i < randArr.Length; i++)
            {
                randArr[i] = rand.Next(5,25);
            }

            int min = int.MaxValue;
            int max = int.MinValue;
            int sum = 0;
            for (int i = 0; i < randArr.Length; i++)
            {
                if(randArr[i] < min)
                {
                    min = randArr[i];
                }
                if(randArr[i] > max)
                {
                    max = randArr[i];
                }
                sum += randArr[i];
            }
            Console.WriteLine($"Min: {min} Max: {max} Sum: {sum}");
            return randArr;
        }

        // Coin Flip
        public static string CoinFlip()
        {
            Console.WriteLine("Tossing the Coin");
            Random rand = new Random();
            int result = rand.Next(2);
            if(result == 0)
            {
                Console.WriteLine("Heads");
                return "Heads";
            }
            else if (result == 1)
            {
                Console.WriteLine("Tails");
                return "Tails";
            }
            return "Flip Failed";
        }


        static void Main(string[] args)
        {
            RandomArray();
            CoinFlip();
        }
    }
}
