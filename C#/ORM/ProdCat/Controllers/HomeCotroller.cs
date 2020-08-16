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
        private MyContext dbContext;
        public HomeController(MyContext context){
            dbContext = context;
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
            ViewBag.Products = dbContext.TheProducts.ToList();
            return View("Index");
        }

        [HttpPost("products")]
        public IActionResult CreateProducts(Products makeProducts)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(makeProducts);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }else{
                ViewBag.Products = dbContext.TheProducts.ToList();
                return View("Index", makeProducts);
            }

        }
        // Individual Products Page
        [HttpPost("products/{ProductId}")]
        public IActionResult AddCategories(WrapperViewModel addCategory, int ProductId)
        {
            addCategory.association.ProductId = ProductId;
            dbContext.Add(addCategory.association);
            dbContext.SaveChanges();
            return RedirectToAction("Index", ProductId);
        }

        [HttpGet("products/{ProductId}")]
        public IActionResult ViewProduct(WrapperViewModel ProductCate, int ProductId){
            Products viewProduct = dbContext.TheProducts.FirstOrDefault(p => p.ProductId == ProductId);
            ProductCate.NewProducts = viewProduct;
            List<Products> listAssociation = dbContext.TheProducts.Include(a => a.myAssociation)
            .ThenInclude(b => b.getCategory).Where(a => a.ProductId == ProductId).ToList();
            List<Categories> ListCategories = dbContext.TheCategories.Include(b => b.myAssociation)
            .ThenInclude(d => d.getCategory).ToList();
            List<Associations> ListAssociation = dbContext.TheAssociations.Where(a => a.ProductId == ProductId).ToList();
            ViewBag.Categories = ListCategories;
            ProductCate.ListProducts = listAssociation;
            ProductCate.ListCategories = dbContext.TheCategories.ToList();
            ProductCate.ListAssociation = dbContext.TheAssociations.ToList();
            ViewBag.Association = ListAssociation;
            ViewBag.Products = viewProduct;
            return View("ViewProducts", ProductCate);
        }

        // All Products Page
        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.Categories = dbContext.TheCategories.ToList();
            return View("Categories");
        }

        [HttpPost("categories")]
        public IActionResult CreateCategories(Categories makeCategories)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(makeCategories);
                dbContext.SaveChanges();
                return RedirectToAction("Categories");
            }else{
                ViewBag.Categories = dbContext.TheCategories.ToList();
                return View("Categories", makeCategories);
            }
        }

        // SIngle Categories Page
        [HttpGet("categories/{CategoryId}")]
        public IActionResult ViewCategory(WrapperViewModel CategoryProd, int CategoryId){
            Categories viewCategory = dbContext.TheCategories.FirstOrDefault(c => c.CategoryId == CategoryId);
            CategoryProd.NewCategories = viewCategory;
            List<Categories> listAssociation = dbContext.TheCategories.Include(a => a.myAssociation)
            .ThenInclude(b => b.getProduct).Where(a => a.CategoryId == CategoryId).ToList();
            List<Products> ListProducts = dbContext.TheProducts.Include(b => b.myAssociation)
            .ThenInclude(d => d.getProduct).ToList();
            List<Associations> ListAssociation = dbContext.TheAssociations.Where(a => a.CategoryId == CategoryId).ToList();
            CategoryProd.ListCategories = listAssociation;
            CategoryProd.ListProducts = dbContext.TheProducts.ToList();
            CategoryProd.ListAssociation = dbContext.TheAssociations.ToList();
            return View("ViewCategories", CategoryProd);
        }

        [HttpPost("categories/{CategoryId}")]
        public IActionResult AddProduct(WrapperViewModel addProduct, int CategoryId)
        {
            addProduct.association.CategoryId = CategoryId;
            dbContext.Add(addProduct.association);
            dbContext.SaveChanges();
            return Redirect($"/categories/{CategoryId}");
            // Associations newAssociation = new Associations();
            // newAssociation.ProductId = addProduct;
            // newAssociation.CategoryId = CategoryId;
            // dbContext.Add(newAssociation);
            // dbContext.SaveChanges();
            // return Redirect($"/categories/{CategoryId}");
        }
    }
}