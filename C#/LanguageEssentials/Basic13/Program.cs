using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        public static void printNumbers()
        {
            for(int i = 0; i <= 255; i ++)
            {
                Console.WriteLine(i);
            }
        }

        public static void printOdd()
        {
            for(int i = 0; i <= 255; i ++)
            {
                if(i % 2 != 0){
                    Console.WriteLine(i);
                }
            }
        }

        public static void PrintSum()
        {
            int sum = 0;
            for(int i = 0; i <= 255; i ++)
            {
                sum += i;
                Console.WriteLine($"New Number: {i} Sum: {sum}");
            }
        }

        public static void LoopArr(int[] myArr)
        {
            foreach(int num in myArr)
            {
                Console.WriteLine(num);
            }
        }

        public static void FindMax(int[] myArr)
        {
            int max = myArr[0];
            for(int i = 0; i < myArr.Length; i++)
            {
                if(myArr[i] > max)
                {
                    max = myArr[i];
                }
            }
            Console.WriteLine(max);
        }

        public static void GetAvg(int[] myArr)
        {
            int sum = myArr[0];
            int counter = 1;
            for (int i = 1; i < myArr.Length; i++)
            {
                sum += myArr[i];
                counter++;
            }
            Console.WriteLine("The avg sum of the array is: " + sum / counter);
        }

        public static int[] OddArray()
        {
            int[] arr = new int[130];
            int count = 0;
            for(int i = 1; i <= 255; i+=2)
            {
                arr[count] = i;
                count++;
            }
            return arr;
        }
        

        static void Main(string[] args)
        {
            int[] numbers = {1,2,3,4,5,-1};
            // printNumbers();
            // printOdd();
            // PrintSum();
            // LoopArr(numbers);
            // FindMax(numbers);
            // GetAvg(numbers);
            OddArray();
        }
    }
}
