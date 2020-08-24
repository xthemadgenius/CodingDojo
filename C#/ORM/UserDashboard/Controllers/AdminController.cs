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
    public class AdminController : Controller
    {
        private MyContext _context;

        public AdminController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("dashManager")]
        public IActionResult DashManager(int UserId)
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
            return View("DashManager", wrap);
        }

        [HttpGet("newUser")]
        public IActionResult MakeUser()
        {
            return View("MakeUser");
        }

        [HttpGet("m-timeline/{SelectedId}")]
        public IActionResult MasterTimeline(int? SelectedId)
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
                return RedirectToAction("DashManager");
            }
            tl.AllMessages = _context.Messages.Include(m => m.Comments).ToList();
            tl.AllComments = _context.Comments.ToList();
            tl.AllUsers = _context.Users.ToList();
            return View("MasterTimeline", tl);
        }

        [HttpGet("/user/{SelectedId}")]
        public IActionResult EditUser(int? SelectedId)
        {
            return View("EditUser");
        }

        [HttpGet("/master/1")]
        public IActionResult MasterProfile()
        {
            return View("MasterProfile");
        }
    }
}