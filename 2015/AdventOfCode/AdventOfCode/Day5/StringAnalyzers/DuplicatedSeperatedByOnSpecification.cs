using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AdventOfCode.Day5.StringAnalyzers
{
    public class DuplicatedSeperatedByOnSpecification : BaseStringAnalyzerSpecification
    {
        public override bool IsGood(string subject)
        {
            return Regex.IsMatch(subject, @"(\w).\1");
        }
    }
}
