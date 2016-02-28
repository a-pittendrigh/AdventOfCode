namespace AdventOfCode.Day5.StringAnalyzers
{
    public class VowelStringAnalyzerSpecification : BaseStringAnalyzerSpecification
    {
        private const string Expression = "[aeiou].{0,}[aeiou].{0,}[aeiou].{0,}";
        public VowelStringAnalyzerSpecification() : base(Expression) { }
        public override bool IsGood(string subject)
        {
            return matcher.IsMatch(subject);
        }
    }
}
