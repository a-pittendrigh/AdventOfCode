using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Day5;
using AdventOfCode.Day6;
using AdventOfCode.Enums;
using AdventOfCode.Input_Readers;
using AdventOfCode.Interfaces;

namespace AdventOfCode
{
    class Program
    {
        static void Main(string[] args)
        {
            int answer;
            string[] input =
                InputToArrayReader.ReadFile(
                    @"D:\Dev\Code\PersonalProjects\AdventOfCode\AdventOfCode\AdventOfCode\Day5\input.txt");
            Day5Runner day5 = new Day5Runner();
            answer = day5.Run(input, 1);
            Console.WriteLine(answer);
            answer = day5.Run(input, 2);
            Console.WriteLine(answer);

            //Day6, Part 1
            RunProblem(GetRunner(AdventOfCodeProblemEnum.Day6Part1), input);
        }

        private static IAdventOfCodeProblemRunner GetRunner(AdventOfCodeProblemEnum problem)
        {
            switch (problem)
            {
                case AdventOfCodeProblemEnum.Day6Part1:
                    return new Day6Runner();
            }            
        }

        private static int RunProblem(IAdventOfCodeProblemRunner runner, string[] input)
        {
            return runner.Run(input);
        }
    }
}
