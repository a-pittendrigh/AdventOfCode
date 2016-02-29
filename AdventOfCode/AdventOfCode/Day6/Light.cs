using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using AdventOfCode.Annotations;

namespace AdventOfCode.Day6
{
    public class Light : INotifyPropertyChanged
    {
        public Light()
        {
            InitFields();
        }

        private void InitFields()
        {
            IsOn = false;
        }

        private bool _isOn;

        public bool IsOn
        {
            get { return _isOn; }
            set
            {
                _isOn = value;
                NotifyPropertyChanged(nameof(IsOn));
            }
        }

        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected virtual void NotifyPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
