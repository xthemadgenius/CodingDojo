using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using BankAccounts.Models;
using Microsoft.AspNetCore.Http;

namespace BankAccounts.Controllers
{
    public class BankController : Controller
    {

        private MyContext _context;

        public BankController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            return View("Login");
        }

        [HttpPost("")]
        public IActionResult RegisterUser(User user)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(i => i.Email == user.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in Use! Try Another one");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                _context.Users.Add(user);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", user.UserId);
                return RedirectToAction("Account");
            }
            return View("Index");
        }

        [HttpPost("login")]
        public IActionResult LoginUser(LoginUser log_in)
        {
            if(ModelState.IsValid)
            {
                User db_user = _context.Users.FirstOrDefault(i => i.Email == log_in.Email);
                if(db_user == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email! Try Another one");
                    return View("Login");
                }
                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(log_in, db_user.Password, log_in.Password);
                if(result == 0)
                {
                    ModelState.AddModelError("Password", "Invalid Password! Try Again");
                    return View("Login");
                }
                HttpContext.Session.SetInt32("UserId", db_user.UserId);
                return RedirectToAction("Account");
            }
            return View("Login");
        }

        [HttpGet("account")]
        public IActionResult Account()
        {
            int? UserId = HttpContext.Session.GetInt32("UserId");
            if(UserId == null)
            {
                return RedirectToAction("Index");
            }
            User user = _context.Users.FirstOrDefault(i => i.UserId == UserId);
            return View("Account");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

    }
}