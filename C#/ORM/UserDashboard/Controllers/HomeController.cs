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
        public IActionResult AdminDasboard()
        {
            return View("ManageUsers");
        }
    }
}