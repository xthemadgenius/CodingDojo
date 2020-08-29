using System;

namespace Debuggification
{
    class Program
    {
        static int FailPlease(int incNum)
        {
            int sum = 0;
            for(int i = 0; i < 10; i+=incNum)
            {
                sum += i;
            }
            System.Console.WriteLine(sum);
            return sum;
        }
        static void CountToThree()
        {
            for(int i = 1; i <= 3; i++)
            {
                System.Console.WriteLine(i);
            }
        }
        static void Main(string[] args)
        {

            FailPlease(2);
            int x = 25;
            int y = x*3;
            double z = (double)y/(2*x);


            
        }
    }
}
