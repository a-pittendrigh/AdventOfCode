using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework.Internal;
using AdventOfCode.Day5.StringAnalyzers;
using NUnit.Framework;

namespace Day5Tests.Day5
{
    [TestFixture]
    public class AdventOfCodeSpecificationTests
    {
        AdventOfCodeSpecification spec = new AdventOfCodeSpecification();
        //I can't think of a better namer ;<
        [Test]
        public void String_Ugknbfddgicrmopn_IsNice()
        {
            Assert.IsTrue(spec.IsGood("ugknbfddgicrmopn"),
                "ugknbfddgicrmopn is nice because it has at least three vowels(u...i...o...), a double letter(...dd...), and none of the disallowed substrings");
        }

        [Test]
        public void String_aaa_IsNice()
        {
            Assert.IsTrue(spec.IsGood("aaa"),
                "aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap");
        }

        [Test]
        public void String_jchzalrnumimnmhp_IsNaughty()
        {
            Assert.IsFalse(spec.IsGood("jchzalrnumimnmhp"),
                "jchzalrnumimnmhp is naughty because it has no double letter");
        }

        [Test]
        public void String_haegwjzuvuyypxyu_IsNaughty()
        {
            Assert.IsFalse(spec.IsGood("haegwjzuvuyypxyu"),
                "haegwjzuvuyypxyu is naughty because it contains the string xy.");
        }

        [Test]
        public void String_dvszwmarrgswjxmb_IsNaughty()
        {
            Assert.IsFalse(spec.IsGood("dvszwmarrgswjxmb"),
                "dvszwmarrgswjxmb is naughty because it contains only one vowel.");
        }
    }
}
