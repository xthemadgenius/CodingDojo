using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Dojodachi.Controllers     //be sure to use your own project's namespace!
{
    public class DojodachiController : Controller
    {
        [HttpGet("")] 
        public IActionResult Index()
        {
            TempData["GameStatus"] = "playing";
            int? Happiness = HttpContext.Session.GetInt32("Happiness");
            if(Happiness == null)
            {
                HttpContext.Session.SetInt32("Happiness", 20);
            }
            int? Fullness = HttpContext.Session.GetInt32("Fullness");
            if(Fullness == null)
            {
                HttpContext.Session.SetInt32("Fullness", 20);
            }
            int? Energy = HttpContext.Session.GetInt32("Energy");
            if(Energy == null)
            {
                HttpContext.Session.SetInt32("Energy", 50);
            }
            int? Meals = HttpContext.Session.GetInt32("Meals");
            if(Meals == null)
            {
                HttpContext.Session.SetInt32("Meals", 3);
            }
            TempData["Happiness"] = HttpContext.Session.GetInt32("Happiness");
            TempData["Fullness"] = HttpContext.Session.GetInt32("Fullness");
            TempData["Energy"] = HttpContext.Session.GetInt32("Energy");
            TempData["Meals"] = HttpContext.Session.GetInt32("Meals");
            if(Energy <= 0 || Happiness <= 0)
            {
                TempData["GameStatus"] = "over";
                TempData["Message"] = "You Lost, Game Over";
            }
            if(Energy >= 100 && Fullness >= 100 && Happiness >= 100)
            {
                TempData["GameStatus"] = "over";
                TempData["Message"] = "You Won! Get your Prize!";
            }
            return View("Index");
        }

        [HttpGet("feed")]
        public IActionResult Feed()
        {
            if(HttpContext.Session.GetInt32("Meals") <= 0)
            {
                TempData["Message"] = "You Cant Feed your pet anymore";
            }
            else
            {
                int? MealsData = HttpContext.Session.GetInt32("Meals") - 1;
                HttpContext.Session.SetInt32("Meals", (int)MealsData);
                Random rand = new Random();
                int chance = rand.Next(0, 4);
                if(chance == 0)
                {
                    TempData["Message"] = "You Pet didnt like its food";
                }
                else
                {
                    int FullBelly = rand.Next(5,11);
                    int? WellFeed = HttpContext.Session.GetInt32("Fullness") + FullBelly;
                    HttpContext.Session.SetInt32("Fullness", (int)WellFeed);
                    TempData["Message"] = $"Your Pets gained {FullBelly} fullness";
                }
            }
            return RedirectToAction("Index");
        }

        [HttpGet("play")]
        public IActionResult Play()
        {
            if(HttpContext.Session.GetInt32("Energy") <= 0)
            {
                TempData["Message"] = "You're out of energy, You cant make any moves";
            }
            Random rand = new Random();
            int chance = rand.Next(0, 4);
            if(chance == 0)
            {
                TempData["Message"] = "You're Pet doesnt like the game try another one";
            }
            else
            {
                int HappyLvl = rand.Next(5,11);
                int? HappyPet = HttpContext.Session.GetInt32("Happiness") + HappyLvl;
                HttpContext.Session.SetInt32("Happiness", (int)HappyPet);
                TempData["Message"] = $"Your Pet gained {HappyLvl} Happiness";
            }
            int? EnergyLvl = HttpContext.Session.GetInt32("Energy") - 5;
            HttpContext.Session.SetInt32("Energy", (int)EnergyLvl);
            return RedirectToAction("Index");
        }

        [HttpGet("work")]
        public IActionResult Work()
        {
            if(HttpContext.Session.GetInt32("Energy") <= 0)
            {
                TempData["Message"] = "Out of Energy cannot work";
            }
            Random rand = new Random();
            int MealLvl = rand.Next(1,4);
            int? MealsAte = HttpContext.Session.GetInt32("Meals") + MealLvl;
            HttpContext.Session.SetInt32("Meals", (int)MealsAte);
            TempData["Message"] = $"Pet has Eaten, used 5 Energy earned {MealLvl} meals";
            int? EnergyLvl = HttpContext.Session.GetInt32("Energy") - 5;
            HttpContext.Session.SetInt32("Energy", (int)EnergyLvl);
            return RedirectToAction("Index");
        }

        [HttpGet("sleep")]
        public IActionResult Sleep()
        {
            if(HttpContext.Session.GetInt32("Fullness") <= 0)
            {
                TempData["Message"] = "Your Fullness is 0 and you cannot fall asleep.";
            }
            else if(HttpContext.Session.GetInt32("Happiness") <= 0)
            {
                TempData["Message"] = "Your Happiness is 0 and you cannot fall asleep.";
            }
            else if (HttpContext.Session.GetInt32("Fullness") <= 0 && HttpContext.Session.GetInt32("Happiness") <= 0)
            {
                TempData["Message"] = "Your Happiness AND Fullness are 0 and you cannot fall asleep.";
            }
            int? EnergyLvl = HttpContext.Session.GetInt32("Energy") + 15;
            HttpContext.Session.SetInt32("Energy", (int)EnergyLvl);

            int? FullnessLvl = HttpContext.Session.GetInt32("Fullness") -5;
            HttpContext.Session.SetInt32("Fullness", (int)FullnessLvl);

            int? HappinessLvl = HttpContext.Session.GetInt32("Happiness") -5;
            HttpContext.Session.SetInt32("Happiness", (int)HappinessLvl);

            TempData["Message"] = "You gained 15 Energy and lost 5 Fullness and 5 Happiness.";
            return RedirectToAction("Index");
        }


        [HttpGet("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}