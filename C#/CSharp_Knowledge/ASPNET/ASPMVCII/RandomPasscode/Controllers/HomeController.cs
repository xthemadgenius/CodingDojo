using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace RandomPasscode.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {
        public Random rand = new Random();
        public string Generate()
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            string code = "";

            for(int i = 0; i < 14; i++)
            {
                code += chars[rand.Next(36)];
            }

            return code;
        }

        public void SessionInit()
        {
            HttpContext.Session.SetString("Passcode", Generate());
            HttpContext.Session.SetInt32("Counter", 1);
        }


        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {
            if(HttpContext.Session.GetString("Passcode") == null)
            {
               SessionInit();
            }
            ViewBag.Passcode = HttpContext.Session.GetString("Passcode");
            ViewBag.Counter = HttpContext.Session.GetInt32("Counter");
            return View("Index"); //or whatever you want to return
        }

        [HttpPost("generate")]
        public IActionResult NewCode()
        {
            if(HttpContext.Session.GetString("Passcode") == null)
            {
                SessionInit();
            }
            else
            {
                int? counter = HttpContext.Session.GetInt32("Counter");
                counter++;
                HttpContext.Session.SetString("Passcode", Generate());
                HttpContext.Session.SetInt32("Counter", (int)counter);
            }
            return RedirectToAction("Index");
        }
    }
}