using System;

namespace MultiplicationTable
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] multiplicationTable = new int[11,11];
            string output = "";
            for(int i = 0; i < 10; i++)
            {
                for(int j = 0; j < 10; j++)
                {
                    multiplicationTable[i + 1, j + 1] = ((i + 1) * (j + 1));

                    if(j == 0)
                    {
                        output += $"[{((i + 1) * (j + 1))}, ";
                    }
                    else if(j == 9)
                    {
                        output += $"{((i + 1) * (j + 1))}]\n";
                    }
                    else
                    {
                        output += $"{((i + 1) * (j + 1))}, ";
                    }
                }
            }
            Console.WriteLine(output);
        }
    }
}
