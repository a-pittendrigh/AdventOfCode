using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Day5;
using NUnit.Framework;

namespace Tests.Day5
{
    [TestFixture]
    public class VowelStringAnalyzerTests
    {
        [Test]
        public void AnalyzerFindsAEIToBeGood()
        {
            VowelStringAnalyzer analyzer = new VowelStringAnalyzer();
            Assert.IsTrue(analyzer.IsGood("aei"));
        }
    }
}
