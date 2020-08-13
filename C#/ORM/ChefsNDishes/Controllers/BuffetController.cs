using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using ChefsNDishes.Models;
using Microsoft.AspNetCore.Http;

namespace ChefsNDishes.Controllers
{
    public class BuffetController : Controller
    {

        private MyContext _context;

        public BuffetController(MyContext context)
        {
            _context = context;
        }

        // Show All Chef in All Dish Page(s)
        [HttpGet("")]
        public IActionResult Index()
        {
            List<Chef> AllChefs = _context.Chefs.Include(c => c.Dishes).ToList();
            return View("Index", AllChefs);
        }

        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            List<Dish> AllDishes = _context.Dishes.Include(d => d.Preparer).ToList();
            return View("Dishes", AllDishes);
        }

        // Open Create Chef or Create Dish Pages())
        [HttpGet("new")]
        public IActionResult NewChef()
        {
            return View("NewChef");
        }

        [HttpGet("dishes/new")]
        public IActionResult NewDish()
        {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("NewDish");
        }

        // Create A New Chef or New Dish Page(s)
        [HttpPost("new")]
        public IActionResult CreateChef(Chef chef)
        {
            if(ModelState.IsValid)
            {
                if((DateTime.Now.Year - chef.DOB.Year)< 18){
                    ModelState.AddModelError("DOB", "Chef Must be 18 yrs of age or older");
                    return View("NewChef");
                }
                _context.Add(chef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("NewChef");
        }

        [HttpPost("dishes/new")]
        public IActionResult CreateDish(Dish food)
        {
            if(ModelState.IsValid)
            {
                _context.Add(food);
                _context.SaveChanges();
                return RedirectToAction("Dishes");
            }
            return View("NewDish");
        }
    }
}