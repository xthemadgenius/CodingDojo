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
        // or
        // public static void OddArray() {
        //     List<int> myList = new List<int>();

        //     for(int i = 1; i < 256; i+=2) {
        //             myList.Add(i);
        //     }
        //     int[] myArr = myList.ToArray();
        //     foreach(int x in myArr) {
        //         System.Console.WriteLine(x);
        //     }
        // }

        public static int GreaterThanY(int[] numbers, int y)
        {
            int count = 0;
            foreach(int number in numbers)
            {
                if(number > y)
                {
                    count++;
                }
            }
            return count;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            for(int i = 0; i < numbers.Length; i++)
            {
                numbers[i] *= numbers[i];
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            for(int i = 0; i < numbers.Length; i++)
            {
                if(numbers[i] < 0){
                    numbers[i] = 0;
                }
            }
        }

        public static void MinMaxAverage(int[] numbers)
        {
            int min = int.MaxValue;
            int max = int.MinValue;
            int sum = 0;
            for(int i = 0; i < numbers.Length; i++)
            {
                if(numbers[i] < min)
                {
                    min = numbers[i];
                }
                if(numbers[i] > max)
                {
                    max = numbers[i];
                }
                sum += numbers[i];
            }
            float avg = sum/numbers.Length;
            Console.WriteLine($"Min: {min} Max: {max} Average: {avg}");
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
            // OddArray();
            // Console.WriteLine(GreaterThanY(numbers, 2));
            // SquareArrayValues(numbers);
            // EliminateNegatives(numbers);
            MinMaxAverage(numbers);
        }
    }
}
