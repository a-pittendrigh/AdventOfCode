using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Day6
{
    public class LightDisplay
    {
        #region Fields

        private Light[,] _lightDisplay;
        //It's basically a graph with only positive values;
        private int domain; //This is the size of the x-axis, going form 0 - domain
        private int range; //This is the size of the y-axis, going from 0 - range
        #endregion
        public LightDisplay(int domain, int range)
        {
            //This must be fixed,
            _lightDisplay = new Light[range, domain];
            for (int y = 0; y < range; y++)
            {
                for (int x = 0; x <= domain; x++)
                {
                    Light newLight = new Light();
                    _lightDisplay[y, x] = newLight;
                    newLight.PropertyChanged += (PropertyChangedHandler);
                }
            }
            LightsLit = 0;
        }

        public int LightsLit { get; set; }

        public void PropertyChangedHandler(object sender, PropertyChangedEventArgs e)
        {
            Light lightThatChanged = sender as Light;
            if (lightThatChanged != null)
            {
                //Will have to change this if I need to implement other properties.
                LightsLit++;
            }
        }
    }
}
