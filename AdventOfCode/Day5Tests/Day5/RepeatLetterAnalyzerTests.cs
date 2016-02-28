using System;
using AdventOfCode.Day5.StringAnalyzers;
using NUnit.Framework;

namespace Day5Tests.Day5
{
    [TestFixture]
    public class RepeatLetterAnalyzerTests
    {
        [Test]
        public void MatchesXX()
        {
            RepeatLetterAnalyzerSpecification ra = new RepeatLetterAnalyzerSpecification();
            Assert.IsTrue(ra.IsGood("xx"));
        }

        [Test]
        public void MatchesABCDDE()
        {
            RepeatLetterAnalyzerSpecification ra = new RepeatLetterAnalyzerSpecification();
            Assert.IsTrue(ra.IsGood("abcdde"));
        }

        [Test]
        public void MatchesAABBCCDD()
        {
            RepeatLetterAnalyzerSpecification ra = new RepeatLetterAnalyzerSpecification();
            Assert.IsTrue(ra.IsGood("aabbccdd"));
        }
    }
}
