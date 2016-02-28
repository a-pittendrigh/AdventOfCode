namespace AdventOfCode.Day5.StringAnalyzers
{
    public class ForbiddenStringMatcher : BaseStringAnalyzerSpecification
    {
        private const string Expression = "ab|cd|pq|xy";
        public ForbiddenStringMatcher() : base(Expression) { }

        public override bool IsGood(string subject)
        {
            return !matcher.IsMatch(subject);
        }
    }
}
