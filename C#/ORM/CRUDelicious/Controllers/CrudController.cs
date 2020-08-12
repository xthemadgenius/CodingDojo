using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers
{
    public class CrudController : Controller
    {
        private MyContext _context;

        public CrudController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.AllDishes = _context.Dishes.ToList();
            return View("Index");
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View("Create");
        }

        [HttpPost("create")]
        public IActionResult Create(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("Create");
            }
        }

        [HttpGet("/dish/{id}")]
        public IActionResult Info(int? id)
        {
            Dish ToDisplay = _context.Dishes.FirstOrDefault(i => i.DishId == id);

            if(ToDisplay == null)
            {
                return RedirectToAction("Index");
            }

            return View("Info", ToDisplay);
        }

        [HttpGet("/dish/{id}/edit")]
        public IActionResult Edit(int id)
        {
            Dish dish = _context.Dishes.FirstOrDefault(d => d.DishId == id);
            return View("Edit");
        }

        [HttpPost("/dish/{id}/update")]
        public IActionResult Update(int id, Dish food)
        {
            if(ModelState.IsValid)
            {
                Dish dish = _context.Dishes.FirstOrDefault(i => i.DishId == id);
                dish.Name = food.Name;
                dish.Chef = food.Chef;
                dish.Calories = food.Calories;
                dish.Tastiness = food.Tastiness;
                dish.Description = food.Description;
                dish.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                food.DishId = id;
                return View("Edit", food);
            }
        }

        [HttpGet("/dish/{id}/delete")]
        public IActionResult Delete (int id)
        {
            Dish ToDelete = _context.Dishes.FirstOrDefault(i => i.DishId == id);
            _context.Remove(ToDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}