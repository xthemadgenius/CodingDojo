using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using ProductsAndCategories.Models;
using Microsoft.AspNetCore.Http;

namespace ProductsAndCategories.Controllers
{
    public class ShopController : Controller
    {

        private MyContext _context;

        public ShopController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet("category")]
        public IActionResult NewCategory()
        {
            return View("NewCategory");
        }

        [HttpGet("1")]
        public IActionResult Product()
        {
            return View("Product");
        }
        
        [HttpGet("category/1")]
        public IActionResult Category()
        {
            return View("Category");
        }
    }
}