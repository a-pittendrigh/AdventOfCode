using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day5
{
    public class ForbiddenStringMatcher : BaseStringAnalyzer
    {
        private const string Expression = "^ab|^cd|^pq|^xy";
        public ForbiddenStringMatcher() : base(Expression) { }
    }
}
