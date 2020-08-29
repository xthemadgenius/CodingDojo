using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using Session.Models;

namespace Session.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {
        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {
            // To set a string into session, we use the following:
            HttpContext.Session.SetString("TestString", "Hello there! General Kenobi...");
            // What this has done is store a key value pair in session, where the key is "TestString",
            // and the value is "Hello there! General Kenobi..."

            // To set an integer into session, we use the following:
            HttpContext.Session.SetInt32("TestNumber", 9);

            // Let's create a user to store into session:
            User MyUser = new User(){
                Name = "Cody"
            };

            HttpContext.Session.SetObjectAsJson("TestObject", MyUser);
            return View("Index"); //or whatever you want to return
        }

        [HttpGet("grievous")]
        public IActionResult PageTwo()
        {
            // In order to retrieve our string from session, and store it into a variable
            string greeting = HttpContext.Session.GetString("TestString");

            // In order to retrieve our integer from session, and store it into a variable
            int? myNum = HttpContext.Session.GetInt32("TestNumber");
            ViewBag.myNum = myNum;

            // In order to retrieve an object that we stored in session (after defining
            // the session extension, of course):
            User fromSession = HttpContext.Session.GetObjectFromJson<User>("TestObject");
            if(fromSession == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.myUser = fromSession;
            return View("PageTwo", greeting);
        }

        [HttpGet("clearsession")]
        public IActionResult ClearSession()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("PageTwo");
        }

        // [HttpGet("testsess")]
        // public IActionResult TestSess()
        // {
        //     int? id = HttpContext.Session.GetInt32("UserId");
        //     if(id == null)
        //     {
        //         return RedirectToAction("Index");
        //     }
        // }
    }
}
