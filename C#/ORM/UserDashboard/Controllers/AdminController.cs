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
            ViewBag.User = _context.Users.FirstOrDefault(u => u.UserId == loggedUser);
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
            ViewBag.User = _context.Users.FirstOrDefault(u => u.UserId == loggedUser);
            return View("MasterTimeline", tl);
        }

        [HttpPost("m-message")]
        public IActionResult MakeMsg()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            if(ModelState.IsValid)
            {
                string post = Request.Form["MsgContent"];
                Message msg = new Message();
                msg.UserId = (int)loggedUser;
                msg.MsgContent = post;
                _context.Add(msg);
                _context.SaveChanges();
                return RedirectToAction("MasterTimeline");
            
            }
            return RedirectToAction("MasterTimeline");
        }

        [HttpPost("m-comment")]
        public IActionResult MakeCmt(int MessageId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            if(ModelState.IsValid)
            {
                string response = Request.Form["ComContent"];
                Comment comment = new Comment();
                comment.MessageId = MessageId;
                comment.UserId = (int)loggedUser; 
                comment.ComContent = response;
                _context.Add(comment);
                _context.SaveChanges();
                return RedirectToAction("MasterTimeline");
            }
            return RedirectToAction("MasterTimeline");
        }

        [HttpGet("/user/{SelectedId}")]
        public IActionResult EditUser(int? SelectedId)
        {
            return View("EditUser");
        }

        // Update Profile
        [HttpGet("/master/{UserId}")]
        public IActionResult MasterProfile(int? UserId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            User wrap = _context.Users.FirstOrDefault(u => u.UserId == UserId);
            return View("MasterProfile", wrap);
        }

        [HttpPost("/master/1/desc")]
        public IActionResult MPDesc()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            return View("MasterProfile");
        }

        [HttpPost("/master/1/pass")]
        public IActionResult MPPass()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            return View("MasterProfile");
        }

        [HttpPost("/master/1/info")]
        public IActionResult MPInfo()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return Redirect("/");
            }
            return View("MasterProfile");
        }
    }
}