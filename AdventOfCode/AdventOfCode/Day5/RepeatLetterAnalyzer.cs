using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day5.Interfaces
{
    public class RepeatLetterAnalyzer : BaseStringAnalyzer
    {
        //Probably not the best way to do this..
        private const string Expression = "aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz";
        public RepeatLetterAnalyzer() : base(Expression) { }
    }
}
