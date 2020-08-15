using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

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
            return Redirect("/products");
        }


        // Show All Products Page
        [HttpGet("products")]
        public IActionResult Product()
        {
            ViewBag.Products = _context.Products.ToList();
            return View("Index");
        }

        [HttpPost("products/create")]
        public IActionResult AddProduct(Product product)
        {
            if(ModelState.IsValid)
            {
                _context.Add(product);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }

        // Show All Categories Page
        [HttpGet("categories")]
        public IActionResult Category()
        {
            ViewBag.Categories = _context.Categories.ToList();
            return View("Category");
        }

        [HttpPost("categories")]
        public IActionResult AddCategory(Category category)
        {
            if(ModelState.IsValid)
            {
                _context.Add(category);
                _context.SaveChanges();
                return RedirectToAction("Category");
            }
            return RedirectToAction("Category");
        }
        // Fails at showing Data for Model
        // Show Single Product Page
        [HttpGet("products/{ProductId}")]
        public IActionResult ShowProduct(int ProductId)
        {
            Product product = _context.Products.Include(p => p.Associations)
                .ThenInclude(a => a.Category)
                .FirstOrDefault(p => p.ProductId == ProductId);

            var allCategories = _context.Categories
                .Include(c => c.Associations)
                .Where(c => c.Associations.All(a => a.ProductId != ProductId));

            ViewBag.Categories = allCategories;
            return View("Product");
        }
        // Fails at Passing Data
        [HttpPost("products/{ProductId}")]
        public IActionResult NewCategory(int ProductId, int CategoryId)
        {
            Association catAssociation = new Association();
            catAssociation.ProductId = ProductId;
            catAssociation.CategoryId = CategoryId;
            _context.Add(catAssociation);
            _context.SaveChanges();
            return RedirectToAction($"/products/{ProductId}");
        }
        // Fails at showing Data for Model
        // Show Single Category Page
        [HttpGet("categories/{CategoryId}")]
        public IActionResult ShowCategory(int CategoryId)
        {
            Category category = _context.Categories.Include(c => c.Associations)
                .ThenInclude(a => a.Product)
                .FirstOrDefault(p => p.CategoryId == CategoryId);

            var allProducts = _context.Products
                .Include(p => p.Associations)
                .Where(p => p.Associations.All(a => a.CategoryId != CategoryId));

            ViewBag.Products = allProducts;
            return View("ShowCategory");
        }

        [HttpPost("categories/{CategoryId}/add")]

        // Works at submitting Category Data
        public IActionResult NewProduct(int ProductId, int CategoryId)
        {
            Association newAssociation = new Association();
            newAssociation.ProductId = ProductId;
            newAssociation.CategoryId = CategoryId;
            _context.Add(newAssociation);
            _context.SaveChanges();
            return RedirectToAction($"/categories/{CategoryId}");
        }

    }
}
