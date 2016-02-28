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
        AdventOfCodeSpecification specification = new AdventOfCodeSpecification();
        public int Run(string[] input)
        {
            int goodStringCounter = 0;            
            foreach (string inputString in input)
            {
                bool isGoodString = specification.IsGood(inputString);
                goodStringCounter += isGoodString ? 1 : 0;
            }
            return goodStringCounter;
        }
    }
}
