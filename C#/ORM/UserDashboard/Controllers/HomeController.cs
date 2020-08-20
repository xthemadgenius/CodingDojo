using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
// using UserDashboard.Models;
using Microsoft.AspNetCore.Http;

namespace UserDashboard.Controllers
{
    public class HomeController : Controller
    {
        // private MyContext _context;

        // public StoreController(MyContext context)
        // {
        //     _context = context;
        // }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }
        [HttpGet("register")]
        public IActionResult Register()
        {
            return View("Register");
        }
        [HttpGet("login")]
        public IActionResult Login()
        {
            return View("Login");
        }

        [HttpGet("newUser")]
        public IActionResult MakeUser()
        {
            return View("MakeUser");
        }

        [HttpGet("dashManager")]
        public IActionResult DashManager()
        {
            return View("DashManager");
        }
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return View("Dashboard");
        }

        [HttpGet("m-timeline/1")]
        public IActionResult MasterTimeline()
        {
            return View("MasterTimeline");
        }

        [HttpGet("timeline/1")]
        public IActionResult Timeline()
        {
            return View("Timeline");
        }

        [HttpGet("/user/1")]
        public IActionResult EditUser()
        {
            return View("EditUser");
        }

        [HttpGet("/master/1")]
        public IActionResult MasterProfile()
        {
            return View("MasterProfile");
        }

        [HttpGet("/profile/1")]
        public IActionResult Profile()
        {
            return View("Profile");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("/");
        }
    }
}