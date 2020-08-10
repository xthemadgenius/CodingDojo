using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Dojodachi.Controllers     //be sure to use your own project's namespace!
{
    public class DojodachiController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            TempData["GameStatus"] = "playing";
            int? Happiness = HttpContext.Session.GetInt32("Happiness");
            if(Happiness == null)
            {
                HttpContext.Session.SetInt32("Happiness", 20);
            }
            return View();
        }
    }
}