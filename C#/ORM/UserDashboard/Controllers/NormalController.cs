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

        // Time line Routes
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

        [HttpPost("message")]
        public IActionResult PostMsg()
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
            }
            if(ModelState.IsValid)
            {
                string post = Request.Form["MsgContent"];
                Message msg = new Message();
                msg.UserId = (int)loggedUser;
                msg.MsgContent = post;
                _context.Add(msg);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            
            }
            return RedirectToAction("Dashboard");
        }

        [HttpPost("comment")]
        public IActionResult PostCmt(int MessageId)
        {
            int? loggedUser = HttpContext.Session.GetInt32("UserId");
            if(loggedUser == null)
            {
                return RedirectToAction("Index");
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
                return RedirectToAction("Dashboard");
            }
            return RedirectToAction("Dashboard");
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