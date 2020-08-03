using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        public static int[] RandomArray()
        {
            int[] randArr = new int[10];
            Random rand = new Random();
            for(int i = 0; i < randArr.Length; i++)
            {
                randArr[i] = rand.Next(5,25);
            }
            return randArr;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
