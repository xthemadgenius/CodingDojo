using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProdCat.Models;
using Microsoft.EntityFrameworkCore;

namespace ProdCat.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        public HomeController(MyContext context){
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Shift()
        {
            return Redirect("/products");
        }
        // All Products Page
        [HttpGet("products")]
        public IActionResult Index()
        {
            ViewBag.Products = _context.TheProducts.ToList();
            return View("Index");
        }

        [HttpPost("products")]
        public IActionResult CreateProducts(Products makeProducts)
        {
            if(ModelState.IsValid)
            {
                _context.Add(makeProducts);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }else{
                ViewBag.Products = _context.TheProducts.ToList();
                return View("Index", makeProducts);
            }

        }
        // Individual Products Page
        [HttpPost("products/{ProductId}")]
        public IActionResult AddCategories(WrapperViewModel addCategory, int ProductId)
        {
            addCategory.association.ProductId = ProductId;
            _context.Add(addCategory.association);
            _context.SaveChanges();
            return RedirectToAction("Index", ProductId);
        }

        [HttpGet("products/{ProductId}")]
        public IActionResult ViewProduct(WrapperViewModel ProductCate, int ProductId){
            Products viewProduct = _context.TheProducts
                                .FirstOrDefault(p => p.ProductId == ProductId);
            ProductCate.NewProducts = viewProduct;
            List<Products> listAssociation = _context.TheProducts
                                .Include(a => a.myAssociation)
                                .ThenInclude(b => b.getCategory)
                                .Where(a => a.ProductId == ProductId)
                                .ToList();
            List<Categories> ListCategories = _context.TheCategories
                                .Include(b => b.myAssociation)
                                .ThenInclude(d => d.getCategory)
                                .ToList();
            List<Associations> ListAssociation = _context.TheAssociations
                                .Where(a => a.ProductId == ProductId)
                                .ToList();
            ViewBag.Categories = ListCategories;
            ProductCate.ListProducts = listAssociation;
            ProductCate.ListCategories = _context.TheCategories.ToList();
            ProductCate.ListAssociation = _context.TheAssociations.ToList();
            ViewBag.Association = ListAssociation;
            ViewBag.Products = viewProduct;
            return View("ViewProducts", ProductCate);
        }

        // All Products Page
        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.Categories = _context.TheCategories.ToList();
            return View("Categories");
        }

        [HttpPost("categories")]
        public IActionResult CreateCategories(Categories makeCategories)
        {
            if(ModelState.IsValid)
            {
                _context.Add(makeCategories);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            }else{
                ViewBag.Categories = _context.TheCategories.ToList();
                return View("Categories", makeCategories);
            }
        }

        // SIngle Categories Page
        [HttpGet("categories/{CategoryId}")]
        public IActionResult ViewCategory(WrapperViewModel CategoryProd, int CategoryId){
            Categories viewCategory = _context.TheCategories
                                .FirstOrDefault(c => c.CategoryId == CategoryId);
            CategoryProd.NewCategories = viewCategory;
            List<Categories> listAssociation = _context.TheCategories
                                .Include(a => a.myAssociation)
                                .ThenInclude(b => b.getProduct)
                                .Where(a => a.CategoryId == CategoryId)
                                .ToList();
            List<Products> ListProducts = _context.TheProducts
                                .Include(b => b.myAssociation)
                                .ThenInclude(d => d.getProduct)
                                .ToList();
            List<Associations> ListAssociation = _context.TheAssociations
                                .Where(a => a.CategoryId == CategoryId)
                                .ToList();
            CategoryProd.ListCategories = listAssociation;
            CategoryProd.ListProducts = _context.TheProducts.ToList();
            CategoryProd.ListAssociation = _context.TheAssociations.ToList();
            return View("ViewCategories", CategoryProd);
        }

        [HttpPost("categories/{CategoryId}")]
        public IActionResult AddProduct(WrapperViewModel addProduct, int CategoryId)
        {
            addProduct.association.CategoryId = CategoryId;
            _context.Add(addProduct.association);
            _context.SaveChanges();
            return Redirect($"/categories/{CategoryId}");
        }
    }
}