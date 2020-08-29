using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using O2MIntro.Models;

namespace O2MIntro.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {
            IndexWrapper WMod = new IndexWrapper();
            WMod.PlanetsDropdown = _context.HomePlanets.ToList();
            return View("Index", WMod); //or whatever you want to return
        }

        [HttpGet("/planets/{id}")]
        public IActionResult OnePlanet(int id)
        {
            HomePlanet Planet = _context.HomePlanets
                .Include(p => p.Aliens)
                .FirstOrDefault(p => p.HomePlanetId == id);

            return View("OnePlanet", Planet);
        }

        [HttpGet("/aliens/{id}")]
        public IActionResult OneAlien(int id)
        {
            Alien Sadie = _context.Aliens  
                .Include(a => a.HomePlanet)
                .FirstOrDefault(a => a.AlienId == id);
            return View("OneAlien", Sadie);
        }

        [HttpPost("/aliens/create")]
        public IActionResult CreateAlien(IndexWrapper Form)
        {
            _context.Add(Form.AlienForm);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}