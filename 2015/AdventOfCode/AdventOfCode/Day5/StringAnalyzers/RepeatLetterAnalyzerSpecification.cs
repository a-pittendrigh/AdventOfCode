namespace AdventOfCode.Day5.StringAnalyzers
{
    public class RepeatLetterAnalyzerSpecification : BaseStringAnalyzerSpecification
    {
        //Probably not the best way to do this..
        //private const string Expression = "aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz";
        private const string Expression = @"(\w)\1+";
        public RepeatLetterAnalyzerSpecification() : base(Expression) { }
        public override bool IsGood(string subject)
        {
            return matcher.IsMatch(subject);
        }
    }
}
