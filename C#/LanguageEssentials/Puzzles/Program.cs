﻿using System;
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

        public static Double TossMultipleCoins(int num)
        {
            Random rand = new Random();
            int result = 0;
            double heads = 0;
            double tails = 0;
            for(int i = 0; i < num; i++)
            {
                result = rand.Next(2);
                if(result == 0)
                {
                    Console.WriteLine("Heads");
                    heads++;
                }
                else if (result == 1)
                {
                    Console.WriteLine("Tails");
                    tails++;
                }
            }
            double ratio = heads/tails;
            Console.WriteLine(ratio);
            return ratio;
        }

        // Names
        public static List<string> Names()
        {
            List<string> names = new List<string> {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            Random rand = new Random();
            int count = names.Count;
            string temp = "";
            while(count > 1)
            {
                count--;
                int i = rand.Next(count + 1);
                temp = names[i];
                names[i] = names[count];
                names[count] = temp;
            }
            foreach(var name in names)
            {
                Console.WriteLine(name);
            }
            for(int i = 0; i < names.Count; i++)
            {
                if(names[i].Length < 5)
                {
                    names.Remove(names[i]);
                }
            }

            return names;
        }

        static void Main(string[] args)
        {
            RandomArray();
            CoinFlip();
            TossMultipleCoins(8);
            List<string> names = Names();
            foreach(string name in names)
            {
                Console.WriteLine(name);
            }
        }
    }
}
