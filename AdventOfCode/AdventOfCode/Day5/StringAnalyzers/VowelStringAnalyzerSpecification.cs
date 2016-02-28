namespace AdventOfCode.Day5.StringAnalyzers
{
    public class VowelStringAnalyzerSpecification : BaseStringAnalyzerSpecification
    {
        //private const string Expression = "[aeiou].{0,}[aeiou].{0,}[aeiou].{0,}";
        private const string Expression = "[aeiou].*[aeiou].*[aeiou]";

        public VowelStringAnalyzerSpecification() : base(Expression) { }
        public override bool IsGood(string subject)
        {
            return matcher.IsMatch(subject);
        }
    }
}
