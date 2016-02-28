using System;
using AdventOfCode.Day5.Interfaces;
using NUnit.Framework;

namespace Day5Tests.Day5
{
    [TestFixture]
    public class RepeatLetterAnalyzerTests
    {
        [Test]
        public void MatchesXX()
        {
            RepeatLetterAnalyzer ra = new RepeatLetterAnalyzer();
            Assert.IsTrue(ra.IsGood("xx"));
        }

        [Test]
        public void MatchesABCDDE()
        {
            RepeatLetterAnalyzer ra = new RepeatLetterAnalyzer();
            Assert.IsTrue(ra.IsGood("abcdde"));
        }

        [Test]
        public void MatchesAABBCCDD()
        {
            RepeatLetterAnalyzer ra = new RepeatLetterAnalyzer();
            Assert.IsTrue(ra.IsGood("aabbccdd"));
        }
    }
}
