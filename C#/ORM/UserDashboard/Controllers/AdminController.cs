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

        [HttpGet("m-timeline/{UserId}")]
        public IActionResult MasterTimeline( int? UserId)
        {
            return View("MasterTimeline");
        }

        [HttpGet("/user/1")]
        public IActionResult EditUser()
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