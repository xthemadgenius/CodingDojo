using System;
using System.Collections.Generic;

namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> boxData = new List<object>();
            boxData.Add(7);
            boxData.Add(28);
            boxData.Add(-1);
            boxData.Add(true);
            boxData.Add("chair");
            int sum = 0;

            foreach(var entry in boxData)
            {
                Console.WriteLine(entry);
                if(entry is int)
                {
                    sum += (int)entry;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
