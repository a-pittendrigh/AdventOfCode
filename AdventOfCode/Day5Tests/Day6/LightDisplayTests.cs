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

        [Test]
        public void CanToggleAllLights()
        {
            int range = 999, domain = 999;
            LightDisplay display = new LightDisplay(domain, range);
            display.PerformActionOnRange(0, 0, 999, 999, LightActionEnum.SwitchOn);
            Assert.AreEqual(1000000, display.LightsLit, "In a 999x999 board, when all lights start as off, turning all lights on should mean that 1000000 are lit after wards.");
        }

        [Test]
        public void CanToggleFirstRowOnly()
        {
            int range = 999, domain = 999;
            LightDisplay display = new LightDisplay(domain, range);
            display.PerformActionOnRange(0, 0, 999, 0, LightActionEnum.ToggleLighState);
            Assert.AreEqual(1000, display.LightsLit, "In a 999x999 board, when all lights start as off, turning all lights in the first row on should mean that 1000 are lit after wards.");
        }

        [Test]
        public void WhenLightsAreOffTurningOffMiddleFourDoesNothing()
        {
            int range = 999, domain = 999;
            LightDisplay display = new LightDisplay(domain, range);
            display.PerformActionOnRange(499, 499, 500, 500, LightActionEnum.SwithOff);
            Assert.AreEqual(0, display.LightsLit, "Expected 0, since turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.");
        }

        [Test]
        public void LightsIToggleAndThenTurnOffShouldBeOffAfterWards()
        {
            int range = 999, domain = 999;
            LightDisplay display = new LightDisplay(domain, range);
            display.PerformActionOnRange(499, 499, 500, 500, LightActionEnum.ToggleLighState);
            display.PerformActionOnRange(499, 499, 500, 500, LightActionEnum.SwithOff);
            string error =
                $"Expected 0, since toggle, then turn off 499,499 through 500,500 would turn off the middle four lights, but got {display.LightsLit}.";
            Assert.AreEqual(0, display.LightsLit, error);
        }
    }
}
