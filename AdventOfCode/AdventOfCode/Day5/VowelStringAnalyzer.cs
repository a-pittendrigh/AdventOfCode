using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day5
{
    public class VowelStringAnalyzer : BaseStringAnalyzer
    {
        private const string Expression = "[aeiou]{3,}";
        public VowelStringAnalyzer() : base(Expression) { }
    }
}
