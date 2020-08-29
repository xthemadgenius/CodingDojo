using System;
using System.Collections.Generic;

namespace FirstProj
{
    class Program
    {

        static string Count(string word)
        {
            if(word == "hello")
            {
                return "hello";
            }
            System.Console.WriteLine(5);
            return "ok i guess";
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Count("tony");

            List<string> myList = new List<string>{"hello", "tony", "stark", "my", "name", "is", "Jarvis"};
            myList.Add("I");
            myList.RemoveRange(1, 2);
            System.Console.WriteLine(myList.Count);

            MyClass bill = new MyClass();


        }
    }
}
