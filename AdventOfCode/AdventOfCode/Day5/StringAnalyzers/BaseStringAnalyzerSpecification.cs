using System.Text.RegularExpressions;

namespace AdventOfCode.Day5.StringAnalyzers
{
    public abstract class BaseStringAnalyzerSpecification : IStringAnalyzerSpecification
    {
        public BaseStringAnalyzerSpecification()
        {
            InitMatcher(string.Empty);
        }

        protected Regex matcher;
        protected BaseStringAnalyzerSpecification(string expression)
        {
            InitMatcher(expression);
        }

        private void InitMatcher(string expression)
        {
            matcher = new Regex(expression);
        }

        public IStringAnalyzerSpecification HasAtLeastThreeVowels()
        {
            return new VowelStringAnalyzerSpecification();
        }

        public IStringAnalyzerSpecification HasAtLeastOneLetterThatAppearsTwiceInARow()
        {
            return new RepeatLetterAnalyzerSpecification();
        }

        public IStringAnalyzerSpecification DoesNotContainForbiddenStrings()
        {
            return new ForbiddenStringMatcher();
        }

        public IStringAnalyzerSpecification ContainsNonOverlappingPair()
        {
            return new NonOverLappingPairSpecification();
        }

        public IStringAnalyzerSpecification ContainsDuplicateSeparatedByOne()
        {
            return new DuplicatedSeperatedByOnSpecification();
        }

        public abstract bool IsGood(string subject);
    }
}
