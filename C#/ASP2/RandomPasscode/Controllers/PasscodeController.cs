using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace RandomPasscode.Controllers     //be sure to use your own project's namespace!
{
    public class PasscodeController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            if(HttpContext.Session.GetInt32("Count") == null)
            {
                HttpContext.Session.SetInt32("Count", 0);
            }
            ViewBag.Count = HttpContext.Session.GetInt32("Count");
            ViewBag.String = HttpContext.Session.GetString("RandCode");
            return View();
        }

        [HttpGet("generate")]
        public IActionResult Generate()
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            char[] randomString = new char[14];
            Random rand = new Random();
            for (int i = 0; i < 14; i++)
            {
                randomString[i] = chars[rand.Next(chars.Length)];
            }
            string newString = new String(randomString);
            HttpContext.Session.SetString("RandCode", newString);
            HttpContext.Session.SetInt32("Count", (int)HttpContext.Session.GetInt32("Count") + 1);
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