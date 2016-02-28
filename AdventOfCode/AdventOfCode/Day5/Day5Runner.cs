using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Day5.StringAnalyzers;

namespace AdventOfCode.Day5
{
    public class Day5Runner
    {
        private IStringAnalyzerSpecification _specification;
        public int Run(string[] input, int part)
        {
            if (part == 1)
            {
                _specification = new AdventOfCodeSpecification1();
            } else
            {
                _specification = new AdventOfCodeSpecification2();
            }

            int goodStringCounter = 0;
            foreach (string inputString in input)
            {
                bool isGoodString = _specification.IsGood(inputString);
                goodStringCounter += isGoodString ? 1 : 0;
            }
            return goodStringCounter;
        }
    }
}
