using System;

namespace FirstProj
{
    public class MyClass
    {
        public int Age { get; set; }
        public MyClass()
        {
            Age = 30;
        }

        public int PrintAge()
        {
            System.Console.WriteLine(Age);
            return Age;
        }
    }
}