using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using TVShows.Models;

namespace TVShows.Controllers
{
    public class CredentialsController : Controller
    {
        private MyContext _context;

        public CredentialsController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult LogReg()
        {
            return View("LogReg");
        }

        [HttpPost("/register")]
        public IActionResult Register(User RegForm)
        {
            if(ModelState.IsValid)
            {
                // What steps do we need to take?

                // Step 1: Let's check to see if the email is already registered
                if(_context.Users.Any(u => u.Email == RegForm.Email))
                {
                    ModelState.AddModelError("Email", "A user with that email address already exists. If it is you, please try logging in.");
                    return LogReg();
                }

                // Step 2: We want to encrypt the password, since the user is not already
                // registered, and they would like to!
                PasswordHasher<User> hasher = new PasswordHasher<User>();

                RegForm.Password = hasher.HashPassword(RegForm, RegForm.Password);

                // Step 3: Now that we have encrypted the password, let's add
                // the user to our database!
                _context.Add(RegForm);
                _context.SaveChanges();

                // Step 4: Now that the user has been created, let's log them in by putting
                // their user id in session!
                HttpContext.Session.SetInt32("UserId", RegForm.UserId);

                // Step 5: Send them to the Shows page
                return RedirectToAction("Shows", "TV");
            }
            else
            {
                return LogReg();
            }
        }

        [HttpPost("/login")]
        public IActionResult Login(LogUser LogForm)
        {
            if(ModelState.IsValid)
            {
                // Step 1: Query for a user in the database with the email address entered in the login form
                User userInDb = _context.Users.FirstOrDefault(u => u.Email == LogForm.LogEmail);

                // Step 2: Make sure that user actually exists!
                if(userInDb == null)
                {
                    ModelState.AddModelError("LogEmail", "Invalid username/password.");
                    return LogReg();
                }

                // Step 3: Now that we know that user exists, let's compare passwords
                PasswordHasher<User> hasher = new PasswordHasher<User>();
                var result = hasher.VerifyHashedPassword(userInDb, userInDb.Password, LogForm.LogPass);

                if(result == 0)
                {
                    // If we're in here, that's the wrong password. But don't tell them that!
                    ModelState.AddModelError("LogEmail", "Invalid username/password.");
                    return LogReg();
                }

                // Step 4: Now that we've verified that they are registered and provided
                // the right password, let's log them in!
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);

                // Step 5: Now let's send them to the Shows page!
                return RedirectToAction("Shows", "TV");
            }
            else
            {
                return LogReg();
            }
        }

        [HttpGet("/logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("LogReg");
        }
    }
}