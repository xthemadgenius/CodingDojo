using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using TheWall.Models;
using Microsoft.AspNetCore.Http;

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

        [HttpPost("register")]
        public IActionResult Register(LogRegWrapper RegForm)
        {
            if(ModelState.IsValid)
            {
                if(_context.users.Any(u => u.Email == RegForm.Register.Email))
                {
                    ModelState.AddModelError("Register.Email", "Try a different Email, Account already registered");
                    return Index();
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                RegForm.Register.Password = Hasher.HashPassword(RegForm.Register, RegForm.Register.Password);
                _context.Add(RegForm.Register);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId",  RegForm.Register.UserId);
                return View("TheWall");
            }
            return View("Index");
        }

        [HttpPost("login")]
        public IActionResult Login(LogRegWrapper LogForm)
        {
            if(ModelState.IsValid)
            {
                User db_user = _context.users.FirstOrDefault(u => u.Email == LogForm.Login.Email);
                if(db_user == null)
                {
                    ModelState.AddModelError("Login.Email", "Try a different Email, Email not valid");
                    return Index();
                }
                PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
                PasswordVerificationResult Result = Hasher.VerifyHashedPassword(LogForm.Login, db_user.Password, LogForm.Login.Password);
                if(Result == 0)
                {
                    ModelState.AddModelError("Login.Email", "Invalid Email, Try another one");
                    return Index();
                }
                HttpContext.Session.SetInt32("UserId",  db_user.UserId);
                return Redirect("/dashboard");
            }
            return View("Index");
        }

        [HttpGet("dashboard")]
        public IActionResult TheWall()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
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