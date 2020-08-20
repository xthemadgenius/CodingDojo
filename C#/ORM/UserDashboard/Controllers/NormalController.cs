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
    public class NormalController : Controller
    {
        // private MyContext _context;

        // public NormalController(MyContext context)
        // {
        //     _context = context;
        // }
        
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            return View("Dashboard");
        }

        [HttpGet("timeline/1")]
        public IActionResult Timeline()
        {
            return View("Timeline");
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