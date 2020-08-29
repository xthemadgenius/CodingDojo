using System;
using System.Collections.Generic;

namespace BoxUnbox
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> myList = new List<object>{7, 28, -1, true, "chair"};
            
            int sum = 0;
            foreach(object item in myList)
            {
                // System.Console.WriteLine(item);
                
                if(item is int)
                {
                    sum += (int)item;
                }


                // string message = "There is no message to print.";
                // if(num is int)
                // {
                //     sum += (int)num;
                // }
                // else if(num is string)
                // {
                //     message = (string)num;
                //     // Alternatively, message = num as string;
                // }
                // else if(num is char)
                // {
                //     Console.WriteLine($"Hey, {num} is a character!");
                // }

                // System.Console.WriteLine(message);
            }
            // System.Console.WriteLine(sum);

            System.Console.WriteLine(myList[2]);
            myList.RemoveAt(2);

            myList.ForEach(item => System.Console.WriteLine(item));





            foreach(object item in myList)
            {
                System.Console.WriteLine(item);
            }
            
            // System.Console.WriteLine("The sum of all numbers in myList is: " + sum);
        }
    }
}
