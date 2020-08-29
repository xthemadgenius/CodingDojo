using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DojoDachi.Models;
using DojoDachi.Extensions;

namespace DojoDachi.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {

        private Dachi SessionCheck()
        {
            Dachi MyDachi = HttpContext.Session.GetObjectFromJson<Dachi>("Dachi");
            if(MyDachi == null)
            {
                MyDachi = new Dachi();
                HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            }

            return MyDachi;
        }

        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {
            return View("Index"); //or whatever you want to return
        }


        [HttpGet("/dachi/get")]
        public JsonResult GetDachi()
        {
            Dachi MyDachi = SessionCheck();

            return Json(MyDachi);
        }

        [HttpGet("/dachi/feed")]
        public JsonResult FeedDachi()
        {
            Dachi MyDachi = SessionCheck();
            MyDachi.Feed();
            HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            return Json(MyDachi);
        }

        [HttpGet("/dachi/play")]
        public JsonResult PlayDachi()
        {
            Dachi MyDachi = SessionCheck();
            MyDachi.Play();
            HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            return Json(MyDachi);
        }

        [HttpGet("/dachi/work")]
        public JsonResult WorkDachi()
        {
            Dachi MyDachi = SessionCheck();
            MyDachi.Work();
            HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            return Json(MyDachi);
        }

        [HttpGet("/dachi/sleep")]
        public JsonResult SleepDachi()
        {
            Dachi MyDachi = SessionCheck();
            MyDachi.Sleep();
            HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            return Json(MyDachi);
        }

        [HttpGet("/dachi/reset")]
        public JsonResult ResetDachi()
        {
            Dachi MyDachi = SessionCheck();
            MyDachi.Restart();
            HttpContext.Session.SetObjectAsJson("Dachi", MyDachi);
            return Json(MyDachi);
        }

        [HttpGet("/dachi/save")]
        public JsonResult SaveDachi()
        {
            // typical session check

            //if the session check fails
            return Json(new { message="error" });
        }

    }
}