 using System;
    using System.Linq;
    using System.Collections.Generic;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using TheWall.Models;

    namespace TheWall.Controllers
    {
        public class WallController : Controller
        {
            private MyContext _context;

            public WallController(MyContext context)
            {
                _context = context;
            }

            [HttpGet("")]
            public IActionResult Index()
            {
                return View("Index");
            }

            [HttpGet("wall")]
            public IActionResult TheWall()
            {
                return View("TheWall");
            }

            [HttpGet("logout")]
            public IActionResult Logout()
            {
                HttpContext.Session.Clear();
                return Redirect("/");
            }
        }
    }