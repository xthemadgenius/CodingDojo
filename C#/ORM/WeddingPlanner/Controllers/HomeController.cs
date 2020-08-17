using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using WeddingPlanner.Models;
using Microsoft.AspNetCore.Http;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet("dashboard")]
        public IActionResult Dash()
        {
            return View("Dashboard");
        }

        [HttpGet("weddings/new")]
        public IActionResult NewWed()
        {
            return View("NewWedding");
        }

        [HttpGet("weddings/1")]
        public IActionResult Details()
        {
            return View("WeddingDetail");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("/");
        }
    }
}