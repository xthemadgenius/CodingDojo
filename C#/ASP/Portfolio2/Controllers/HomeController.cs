using System;
using Microsoft.AspNetCore.Mvc;
namespace Portfolio2.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??copy
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "Hello World from HomeController!";
        }

        [HttpGet]       //type of request
        [Route("about")]     //associated route string (exclude the leading /)
        public ViewResult About()
        {
            return View("Index");
        }

        [HttpGet]       //type of request
        [Route("goat")]     //associated route string (exclude the leading /)
        public RedirectToActionResult Goat()
        {
            return RedirectToAction("Index");
        }

        // Show Json Objects
        [HttpGet("displayanon")]
        public JsonResult DisplayAnon()
        {
            var AnonObject = new {
                FirstName = "Raz",
                LastName = "Aquato",
                Age = 10
            };
            
            return Json(AnonObject);
        }

    }
}