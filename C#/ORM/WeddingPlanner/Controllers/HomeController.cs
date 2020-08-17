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

        [HttpPost("register")]
        public IActionResult Register(LogRegWrapper RegForm)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(u => u.Email == RegForm.Register.Email))
                {
                    ModelState.AddModelError("Register.Email", "Try a different Email, Account already registered");
                    return Index();
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                RegForm.Register.Password = Hasher.HashPassword(RegForm.Register, RegForm.Register.Password);
                _context.Add(RegForm.Register);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId",  RegForm.Register.UserId);
                return View("Dashboard");
            }
            return View("Index");
        }

        [HttpPost("login")]
        public IActionResult Login(LogRegWrapper LogForm)
        {
            if(ModelState.IsValid)
            {
                User db_user = _context.Users.FirstOrDefault(u => u.Email == LogForm.Login.Email);
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
        public IActionResult Dashboard()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            WeddingWrapper WedWrap = new WeddingWrapper();
            WedWrap.AllWeddings = _context.Weddings
                            .Include(w => w.Planner)
                            .Include(w => w.GuestsAttending)
                            .ThenInclude(g => g.Guest)
                            .Where(w => w.Date > DateTime.Today)
                            .ToList();
            WedWrap.LoggedUser = _context.Users
                .FirstOrDefault(u => u.UserId == (int)loggedUser);
            return View("Dashboard", WedWrap);
        }

        [HttpGet("weddings/new")]
        public IActionResult NewWedding()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            return View("NewWedding");
        }

        [HttpPost("weddings/create")]
        public IActionResult CreateWedding(Wedding WedForm)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            WedForm.UserId = (int)loggedUser;
            if(ModelState.IsValid)
            {
                if(WedForm.Date < DateTime.Today)
                {
                    ModelState.AddModelError("Date", "You cant schedule your wedding in the past");
                    return NewWedding();
                }
                _context.Add(WedForm);
                _context.SaveChanges();
                return Redirect("/dashboard");
            }
            return View("NewWedding");
        }

        [HttpGet("weddings/{WeddingId}")]
        public IActionResult Details(int WeddingId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            Wedding ShowWedding = _context.Weddings
                        .Include(w => w.GuestsAttending)
                        .ThenInclude(g =>g.Guest)
                        .FirstOrDefault(w => w.WeddingId == WeddingId);
            if(ShowWedding == null)
            {
                return RedirectToAction("Dashboard");
            }
            return View("WeddingDetail", ShowWedding);
        }

        [HttpGet("weddings/{WeddingId}/edit")]
        public IActionResult EditWedding(int WeddingId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            Wedding EditWed = _context.Weddings.FirstOrDefault(w =>w.WeddingId == WeddingId);
            if(EditWed == null || EditWed.UserId != (int)loggedUser)
            {
                return RedirectToAction("Dashboard");
            }
            return View("EditWedding", EditWed);
        }

        [HttpPost("weddings/{WeddingId}/update")]
        public IActionResult UpdateWedding(int WeddingId, Wedding WedForm)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            if(!_context.Weddings.Any(w => w.WeddingId == WeddingId && w.UserId == (int)loggedUser))
            {
                return RedirectToAction("Dashboard");
            }
            WedForm.UserId = (int)loggedUser;
            if(ModelState.IsValid)
            {
                WedForm.WeddingId = WeddingId;
                _context.Update(WedForm);
                _context.Entry(WedForm).Property("CreatedAt").IsModified = false;
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            return EditWedding(WeddingId);
        }

        [HttpGet("weddings/{WeddingId}/rsvp")]
        public RedirectToActionResult RSVP(int WeddingId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            Wedding NewGuest = _context.Weddings
                        .Include(g => g.GuestsAttending)
                        .FirstOrDefault(w => w.WeddingId == WeddingId);
            if(NewGuest == null || NewGuest.UserId == (int)loggedUser || NewGuest.GuestsAttending.Any(g => g.UserId == (int)loggedUser))
            {
                return RedirectToAction("Dashboard");
            }
            RSVP NewRsvp = new RSVP();
            NewRsvp.UserId = (int)loggedUser;
            NewRsvp.WeddingId = WeddingId;
            _context.Add(NewRsvp);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("weddings/{WeddingId}/unrsvp")]
        public RedirectToActionResult UNRSVP(int WeddingId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            Wedding UnAttend = _context.Weddings
                        .Include(g => g.GuestsAttending)
                        .FirstOrDefault(w => w.WeddingId == WeddingId);
            if(UnAttend == null || !UnAttend.GuestsAttending.Any(g => g.UserId == (int)loggedUser))
            {
                return RedirectToAction("Dashboard");
            }
            RSVP NotGoing = _context.RSVPs
                        .FirstOrDefault(u => u.UserId == (int)loggedUser && u.WeddingId == WeddingId);
            _context.Remove(NotGoing);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("/");
        }
    }
}