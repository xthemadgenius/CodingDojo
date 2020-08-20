using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
// using UserDashboard.Models;
using Microsoft.AspNetCore.Http;

namespace UserDashboard.Controllers
{
    public class AdminController : Controller
    {
        // private MyContext _context;

        // public AdminController(MyContext context)
        // {
        //     _context = context;
        // }

        [HttpGet("dashManager")]
        public IActionResult DashManager()
        {
            return View("DashManager");
        }

        [HttpGet("newUser")]
        public IActionResult MakeUser()
        {
            return View("MakeUser");
        }

        [HttpGet("m-timeline/1")]
        public IActionResult MasterTimeline()
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