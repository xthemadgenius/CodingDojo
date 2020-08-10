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
            else{
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

        [HttpGet("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}