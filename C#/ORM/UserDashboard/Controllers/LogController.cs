using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using UserDashboard.Models;
using Microsoft.AspNetCore.Http;

namespace UserDashboard.Controllers
{
    public class LogController : Controller
    {
        // private MyContext _context;

        // public LogController(MyContext context)
        // {
        //     _context = context;
        // }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet("register")]
        public IActionResult Registered()
        {
            return View("/dashboard");
        }

        // [HttpPost("register")]
        // public IActionResult Register(LogRegWrapper RegForm)
        // {
        //     if(ModelState.IsValid)
        //     {
        //         if(_context.Users.Any(u => u.Email == RegForm.Register.Email))
        //         {
        //             ModelState.AddModelError("Register.Email", "Try a different Email, Account already registered");
        //             return Index();
        //         }
        //         PasswordHasher<User> Hasher = new PasswordHasher<User>();
        //         RegForm.Register.Password = Hasher.HashPassword(RegForm.Register, RegForm.Register.Password);
        //         // 🔽Will This work to set Admin and Normal 
        //         RegForm.Register.Role = true;
        //         // extra snippet end
        //         _context.Add(RegForm.Register);
        //         _context.SaveChanges();
        //         HttpContext.Session.SetInt32("UserId",  RegForm.Register.UserId);
        //         return View("Dashboard");
        //     }
        //     return View("Index");
        // }

        [HttpGet("login")]
        public IActionResult Login()
        {
            return View("Login");
        }

        // [HttpPost("login")]
        // public IActionResult Login(LogRegWrapper LogForm)
        // {
        //     if(ModelState.IsValid)
        //     {
        //         User db_user = _context.Users.FirstOrDefault(u => u.Email == LogForm.Login.Email);
        //         if(db_user == null)
        //         {
        //             ModelState.AddModelError("Login.Email", "Try a different Email, Email not valid");
        //             return Index();
        //         }
        //         PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
        //         PasswordVerificationResult Result = Hasher.VerifyHashedPassword(LogForm.Login, db_user.Password, LogForm.Login.Password);
        //         if(Result == 0)
        //         {
        //             ModelState.AddModelError("Login.Email", "Invalid Email, Try another one");
        //             return Index();
        //         }
        //         HttpContext.Session.SetInt32("UserId",  db_user.UserId);
        //         return Redirect("/dashboard");
        //     }
        //     return View("Index");
        // }

    }
}