using System;

namespace DojoDachi.Models
{
    public class Dachi
    {
        public int Fullness { get; set; }
        public int Happiness { get; set; }
        public int Meals { get; set; }
        public int Energy { get; set; }

        public bool GameOver { get; set; }

        public string Message { get; set; }
        private Random _rand { get; set; } = new Random();

        public Dachi()
        {
            Restart();
        }

        public void Feed()
        {
            if(Meals > 0)
            {
                Meals--;
                if(_rand.Next(0,4) != 1)
                {
                    int addFull = _rand.Next(5,11);
                    Fullness += addFull;
                    Message = $"You fed your Dojodachi. Meals -1 Fullness +{addFull}";
                }
                else
                {
                    Message = "Your Dojodachi did not like that. Meals -1";
                }
            }
            else
            {
                Message = "You do not have enough meals to feed your Dojodachi.";
            }
            CheckGame();
        }

        public void Play()
        {
            if(Energy >= 5)
            {
                Energy -= 5;

                if(_rand.Next(0,4) != 1)
                {
                    int addHapp = _rand.Next(5, 11);
                    Happiness += addHapp;
                    Message = $"You played with your Dojodachi. Energy -5 Happiness +{addHapp}";
                }
                else
                {
                    Message = "Your Dojodachi did not like that. Energy -5";
                }
            }
            else
            {
                Message = "Your Dojodachi does not have enough energy to play.";
            }
            CheckGame();
        }

        public void Work()
        {
            if(Energy >= 5)
            {
                Energy -= 5;

                int addMeal = _rand.Next(1,4);
                Meals += addMeal;
                Message = $"Your Dojodachi worked. Energy -5 Meals +{addMeal}";
            }
            else
            {
                Message = "Your Dojodachi is too tired to work.";
            }
        }

        public void Sleep()
        {
            Energy += 15;
            Fullness -= 5;
            Happiness -= 5;
            Message = "Your Dojodachi took a nap. Energy +15 Fullness -5 Happiness -5";

            CheckGame();
        }

        public void Restart()
        {
            Fullness = 20;
            Happiness = 20;
            Meals = 3;
            Energy = 50;
            GameOver = false;
            Message = "Welcome to your Dojodachi! Please don't kill it.";
        }

        public void CheckGame()
        {
            if(Energy >= 100 && Fullness >= 100 && Happiness >= 100)
            {
                GameOver = true;
                Message = "Congratulations! You won!";
            }
            else if(Fullness <= 0 || Happiness <= 0)
            {
                GameOver = true;
                Message = "You're terrible at taking care of this Dojodachi. Please don't adopt a real pet or have kids.";
            }
        }
    }
}