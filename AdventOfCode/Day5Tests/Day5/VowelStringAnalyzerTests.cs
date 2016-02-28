using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode;
using AdventOfCode.Day5;
using AdventOfCode.Day5.StringAnalyzers;
using NUnit.Framework;

namespace Tests.Day5
{
    [TestFixture]
    public class VowelStringAnalyzerTests
    {
        [Test]
        public void AnalyzerFindsAEIToBeGood()
        {
            VowelStringAnalyzerSpecification analyzerSpecification = new VowelStringAnalyzerSpecification();
            Assert.IsTrue(analyzerSpecification.IsGood("aei"));
        }

        [Test]
        public void AnalyzerFindsXAZEGOVToBeGood()
        {
            VowelStringAnalyzerSpecification analyzerSpecification = new VowelStringAnalyzerSpecification();
            Assert.IsTrue(analyzerSpecification.IsGood("xazegov"));
        }

        [Test]
        public void AnalyzerFindsAEIOUAEIOUAEIOUToBeGood()
        {
            VowelStringAnalyzerSpecification analyzerSpecification = new VowelStringAnalyzerSpecification();
            Assert.IsTrue(analyzerSpecification.IsGood("aeiouaeiouaeiou"));
        }

        [Test]
        public void AnalyzerFindsAToBeBad()
        {
            VowelStringAnalyzerSpecification analyzerSpecification = new VowelStringAnalyzerSpecification();
            Assert.IsFalse(analyzerSpecification.IsGood("a"));
        }
    }
}
