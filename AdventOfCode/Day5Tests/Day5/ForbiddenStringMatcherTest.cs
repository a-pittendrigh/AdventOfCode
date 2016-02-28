using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using AdventOfCode.Day5;
using AdventOfCode.Day5.StringAnalyzers;

namespace Day5Tests.Day5
{
    [TestFixture]
    public class ForbiddenStringMatcherTest
    {
        [Test]
        public void DoesNotMatchAB()
        {
            ForbiddenStringMatcher m = new ForbiddenStringMatcher();
            Assert.IsFalse(m.IsGood("ab"));
        }

        [Test]
        public void DoesNotMatchCD()
        {
            ForbiddenStringMatcher m = new ForbiddenStringMatcher();
            Assert.IsFalse(m.IsGood("cd"));
        }

        [Test]
        public void DoesNotMatchPQ()
        {
            ForbiddenStringMatcher m = new ForbiddenStringMatcher();
            Assert.IsFalse(m.IsGood("pq"));
        }

        [Test]
        public void DoesNotMatchXY()
        {
            ForbiddenStringMatcher m = new ForbiddenStringMatcher();
            Assert.IsFalse(m.IsGood("xy"));
        }
    }
}
