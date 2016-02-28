using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day5
{
    public interface IStringAnalyzer
    {
        bool IsGood(string subject);
    }
}
