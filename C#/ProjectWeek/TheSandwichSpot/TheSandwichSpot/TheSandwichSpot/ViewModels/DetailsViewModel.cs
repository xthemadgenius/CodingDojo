using TheSandwichSpot.Model;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace TheSandwichSpot.ViewModel
{
    public class DetailsViewModel : BaseViewModel
    {
        ObservableCollection<Sandwich> sandwiches;
        public ObservableCollection<Sandwich> Sandwiches
        {
            get { return sandwiches; }
            set
            {
                sandwiches = value;
                OnPropertyChanged();
            }
        }

        private Sandwich selectedSandwich;
        public Sandwich SelectedSandwich
        {
            get { return selectedSandwich; }
            set
            {
                selectedSandwich = value;
                OnPropertyChanged();
            }
        }

        private int position;
        public int Position
        {
            get
            {
                if (position != sandwiches.IndexOf(selectedSandwich))
                    return sandwiches.IndexOf(selectedSandwich);

                return position;
            }
            set
            {
                position = value;
                selectedSandwich = sandwiches[position];

                OnPropertyChanged();
                OnPropertyChanged(nameof(SelectedSandwich));
            }
        }

        public ICommand ChangePositionCommand => new Command(ChangePosition);

        private void ChangePosition(object obj)
        {
            string direction = (string)obj;

            if (direction == "L")
            {
                if (position == 0)
                {
                    Position = sandwiches.Count - 1;
                    return;
                }

                Position -= 1;
            }
            else if (direction == "R")
            {
                if (position == sandwiches.Count - 1)
                {
                    Position = 0;
                    return;
                }

                Position += 1;
            }

        }

    }
}