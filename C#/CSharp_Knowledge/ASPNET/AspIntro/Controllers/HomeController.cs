using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AspIntro
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet("{name}")]
        public ViewResult Person(string name)
        {
            ViewBag.StringList = new List<string>
            {
                "Bill",
                "Bob",
                "Tony",
                "Mary",
                "Jeff"
            };
            ViewBag.RealName = "A-aron";

            ViewBag.Name = name;

            return View("Person");
        }


        [HttpPost("submit")]
        public IActionResult FormSubmission(string name, string nickname)
        {
            if(name == "Eric")
            {
                // return Redirect("/gohomeeric");
                return RedirectToAction("GoAwayEric");
            }
            ViewBag.Name = name;
            ViewBag.NickName = nickname;
            return View("FormSubmission");
        }

        [HttpGet("gohomeeric")]
        public ViewResult GoAwayEric()
        {
            return View("GoAwayEric");
        }

    }
}