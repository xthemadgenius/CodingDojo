using System;
using System.Collections.Generic;

namespace CollectionPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] intArrays = {0,1,2,3,4,5,6,7,8,9};
            string[] stringArrays = {"Tim", "Martin", "Nikki", "Sara"};
            bool[] boolArrays = {true, false, true, false, true, false, true, false, true, false};

            List<string> iceCreamFlavors = new List<string>{"Vanilla", "Chocolate", "Cookies and Cream", "Chocolate Chip", "Strawberry"};
            Console.WriteLine(iceCreamFlavors.Count);

        }
    }
}
