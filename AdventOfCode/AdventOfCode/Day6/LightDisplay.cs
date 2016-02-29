using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Day6.Enums;

namespace AdventOfCode.Day6
{
    public class LightDisplay
    {
        #region Fields

        private Light[,] _lightDisplay;
        //It's basically a graph with only positive values;
        //private int _domain; //This is the size of the x-axis, going form 0 - domain
        //private int _range; //This is the size of the y-axis, going from 0 - range
        #endregion
        public LightDisplay(int domain, int range)
        {
            InitProperies(domain, range);
        }

        private void InitProperies(int domain, int range)
        {
            _lightDisplay = new Light[range + 1, domain + 1];
            InitBoard(domain + 1, range + 1);
            LightsLit = 0;
        }

        private void InitBoard(int domain, int range)
        {
            for (int y = 0; y < range; y++)
            {
                for (int x = 0; x < domain; x++)
                {
                    _lightDisplay[y, x] = new Light(PropertyChangedHandler);
                }
            }
        }

        public int LightsLit { get; set; }

        public void PropertyChangedHandler(object sender, PropertyChangedEventArgs e)
        {
            Light lightThatChanged = sender as Light;
            if (lightThatChanged != null)
            {
                //Will have to change this if I need to implement other properties.
                int onLightCountChange = lightThatChanged.IsOn ? 1 : -1;
                LightsLit += onLightCountChange;
            }
        }

        public void TurnLightOn(int x, int y)
        {
            _lightDisplay[x, y].IsOn = true;
        }

        public void ToggleLight(int x, int y)
        {
            _lightDisplay[x, y].IsOn = !_lightDisplay[x, y].IsOn;
        }

        public void TurnLightOff(int x, int y)
        {
            _lightDisplay[x, y].IsOn = false;
        }

        public void PerformActionOnLight(int x, int y, LightActionEnum action)
        {
            switch (action)
            {
                case LightActionEnum.SwitchOn:
                    TurnLightOn(x,y);
                    break;
                case LightActionEnum.SwithOff:
                    TurnLightOff(x,y);
                    break;
                case LightActionEnum.ToggleLighState:
                default:
                    ToggleLight(x,y);
                    break;
            }
        }

        public void PerformActionOnRange(int xStart, int yStart, int xEnd, int yEnd, LightActionEnum action)
        {
            for (int x = xStart; x <= xEnd; x++)
            {
                for (int y = yStart; y <= yEnd; y++)
                {
                    PerformActionOnLight(x, y, action);
                }
            }
        }
    }
}
