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
    public class NormalController : Controller
    {
        private MyContext _context;

        public NormalController(MyContext context)
        {
            _context = context;
        }
        
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            DashWrapper wrap = new DashWrapper();
            wrap.Users = _context.Users
                            .OrderBy(c => c.CreatedAt)
                            .ToList();
            return View("Dashboard", wrap);
        }

        [HttpGet("timeline/{SelectedId}")]
        public IActionResult Timeline(int? SelectedId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            NotificationWrapper tl = new NotificationWrapper();
            tl.Users = _context.Users.FirstOrDefault(u => u.UserId == SelectedId);
            if(tl.Users == null)
            {
                return RedirectToAction("Dashboard");
            }
            tl.AllMessages = _context.Messages.Include(m => m.Comments).ToList();
            tl.AllComments = _context.Comments.ToList();
            tl.AllUsers = _context.Users.ToList();
            return View("Timeline", tl);
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