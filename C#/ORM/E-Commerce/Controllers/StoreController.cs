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
            DashWrapper wrap = new DashWrapper()
            {
                AllProducts = _context.Products.Take(5).ToList(),
                RecentOrders = _context.Orders.Include(b => b.Buyer).Include(i => i.ItemBought).OrderByDescending(o => o.CreatedAt).Take(3).ToList(),
                NewCustomers = _context.Customers.OrderByDescending(c => c.CreatedAt).Take(3).ToList(),
            };
            return View("Dashboard", wrap);
        }

        [HttpGet("products")]
        public IActionResult Products()
        {
            ProdWrapper wrap = new ProdWrapper();
            wrap.AllProducts = _context.Products.ToList();
            return View("Products", wrap);
        }

        [HttpPost("products/new")]
        public IActionResult Items(ProdWrapper item)
        {
            if(ModelState.IsValid){
                _context.Add(item.AddProduct);
                _context.SaveChanges();
                return Redirect("/products");
            }
            return Products();
        }

        [HttpGet("orders")]
        public IActionResult Orders()
        {
            ShopperWrapper wrap = new ShopperWrapper()
            {
                AllOrders = _context.Orders.OrderByDescending(c => c.CreatedAt)
                                    .Include(b => b.Buyer)
                                    .Include(i => i.ItemBought)
                                    .ToList(),
                AllCustomers = _context.Customers.ToList(),
                AllProducts = _context.Products.ToList()
            };
            return View("Orders", wrap);
        }

        [HttpPost("orders/new")]
        public IActionResult Purchases(ShopperWrapper purchase)
        {
            if(ModelState.IsValid)
            {
                var PickProd = _context.Products
                            .FirstOrDefault(p => p.ProductId == purchase.AddOrder.ProductId);
                PickProd.Quantity -= purchase.AddOrder.Quantity;
                PickProd.UpdatedAt = DateTime.Now;
                _context.Add(purchase.AddOrder);
                _context.Products.Update(PickProd);
                _context.SaveChanges();
                return RedirectToAction("Orders", PickProd);
            }
            return Orders();
        }

        [HttpGet("customers")]
        public IActionResult Customers()
        {
            CustomerWrapper wrap = new CustomerWrapper();
            wrap.AllCustomers = _context.Customers
                            .OrderByDescending(c => c.CreatedAt)
                            .ToList();
            return View("Customers", wrap);
        }

        [HttpPost("customers/new")]
        public IActionResult Shopper(CustomerWrapper shopper)
        {
            if(ModelState.IsValid){
                if(_context.Customers.Any(s => s.Name == shopper.NewCustomer.Name))
                    {
                        ModelState.AddModelError("Name", "A Customer with that title already exists.");
                        return Customers();
                    }
                CustomerWrapper wrap = new CustomerWrapper();
                _context.Add(shopper.NewCustomer);
                _context.SaveChanges();
                return RedirectToAction("Customers", wrap);
            }
            return Customers();
        }

        [HttpGet("customers/{CustomerId}/remove")]
        public IActionResult RemoveUser(int CustomerId)
        {
            Customer DeleteCustomer = _context.Customers
                        .FirstOrDefault(c => c.CustomerId == CustomerId);
            _context.Remove(DeleteCustomer);
            _context.SaveChanges();
            return RedirectToAction("Customers");
        }

        [HttpGet("settings")]
        public IActionResult Settings()
        {
            return View("Settings");
        }
    }
}