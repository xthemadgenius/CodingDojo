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
            Console.WriteLine(iceCreamFlavors[2]);
            iceCreamFlavors.RemoveAt(2);
            Console.WriteLine(iceCreamFlavors.Count);
            Dictionary<string,string> userInfo= new Dictionary<string, string>{};
            
            for(int i = 0; i < stringArrays.Length; i++)
            {
                userInfo.Add(stringArrays[i], iceCreamFlavors[i]);
            }
            foreach(KeyValuePair<string,string> entry in userInfo)
            {
                Console.WriteLine($"{entry.Key}s favorite flavor is {entry.Value}");
            }

        }
    }
}
