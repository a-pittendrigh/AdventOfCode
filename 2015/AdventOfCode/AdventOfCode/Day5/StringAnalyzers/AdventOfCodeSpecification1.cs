using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day5.StringAnalyzers
{
    public class AdventOfCodeSpecification1 : BaseStringAnalyzerSpecification
    {
        public override bool IsGood(string subject)
        {
            return HasAtLeastOneLetterThatAppearsTwiceInARow().IsGood(subject)
                && HasAtLeastThreeVowels().IsGood(subject)
                && DoesNotContainForbiddenStrings().IsGood(subject);
        }
    }
}
