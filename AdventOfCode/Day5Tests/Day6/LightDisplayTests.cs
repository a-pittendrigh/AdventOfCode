using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Day6;
using AdventOfCode.Day6.Enums;
using NUnit.Framework.Internal;
using NUnit.Framework;

namespace Day5Tests.Day6
{
    [TestFixture]
    public class LightDisplayTests
    {
        [Test]
        public void WhenDisplayIsInitAllLightsAreOff()
        {
            int range = 2, domain = 2;
            LightDisplay display = new LightDisplay(domain, range);
            display.PerformActionOnRange(0 , 0, 2, 2, LightActionEnum.ToggleLighState);
            Assert.AreEqual(9, display.LightsLit, "In a 3x3 board, when all lights start as off, toggling all lights should mean that 9 are lit after wards.");
        }
    }
}
