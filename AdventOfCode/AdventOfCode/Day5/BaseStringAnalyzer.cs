using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AdventOfCode.Day5
{
    public class BaseStringAnalyzer : IStringAnalyzer
    {
        public BaseStringAnalyzer()
        {
            InitMatcher(string.Empty);
        }

        private Regex matcher;
        protected BaseStringAnalyzer(string expression)
        {
            InitMatcher(expression);
        }

        private void InitMatcher(string expression)
        {
            matcher = new Regex(expression);
        }

        public bool IsGood(string subject)
        {
            return matcher.IsMatch(subject);
        }
    }
}
