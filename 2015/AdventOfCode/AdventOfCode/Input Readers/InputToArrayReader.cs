using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Interfaces;

namespace AdventOfCode.Input_Readers
{
    public class InputToArrayReader
    {
        public static string[] ReadFile(string filePath)
        {
            string line;
            List<string> lines = new List<string>();
            // Read the file and display it line by line.
            System.IO.StreamReader file =
               new System.IO.StreamReader(filePath);
            while ((line = file.ReadLine()) != null)
            {
                if (!String.IsNullOrEmpty(line))
                {
                    lines.Add(line.Trim());
                }
            }

            file.Close();
            return lines.ToArray();
        }
    }
}
