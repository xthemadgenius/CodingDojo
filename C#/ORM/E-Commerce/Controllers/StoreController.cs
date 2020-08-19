using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using E_Commerce.Models;
using Microsoft.AspNetCore.Http;

namespace E_Commerce.Controllers
{
    public class StoreController : Controller
    {
        private MyContext _context;

        public StoreController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Dashboard()
        {
            return View("Dashboard");
        }

        [HttpGet("products")]
        public IActionResult Products()
        {
            return View("Products");
        }

        [HttpGet("orders")]
        public IActionResult Orders()
        {
            return View("Orders");
        }

        [HttpGet("customers")]
        public IActionResult Customers()
        {
            return View("Customers");
        }

        [HttpGet("settings")]
        public IActionResult Settings()
        {
            return View("Settings");
        }
    }
}