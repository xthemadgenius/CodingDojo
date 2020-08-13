using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using ChefsNDishes.Models;

namespace ChefsNDishes.Controllers
{
    public class BuffetController : Controller
    {
        private MyContext _context;

        public BuffetController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            return View("Dishes");
        }

        [HttpGet("new")]
        public IActionResult NewChef()
        {
            return View("NewChef");
        }

        [HttpGet("dishes/new")]
        public IActionResult NewDish()
        {
            return View("NewDish");
        }
    }
}