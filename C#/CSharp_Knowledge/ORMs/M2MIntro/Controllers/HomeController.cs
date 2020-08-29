using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using M2MIntro.Models;

namespace M2MIntro.Controllers     //be sure to use your own project's namespace!
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
            List<Alien> AllAliens = _context.Aliens
                .Include(a => a.HomePlanet)
                .Include(a => a.PlanetsVisited)
                .ThenInclude(v => v.Planet)
                .ToList();
            return View("Index", AllAliens); //or whatever you want to return
        }

        [HttpGet("/aliens/{id}/edit")]
        public IActionResult EditAlien(int id)
        {
            Alien ToEdit = _context.Aliens.FirstOrDefault(a => a.AlienId == id);
            return View("EditAlien", ToEdit);
        }

        [HttpGet("/aliens/{id}/addvisit")]
        public IActionResult AddVisit(int id)
        {
            AddVisitWrapper WMod = new AddVisitWrapper();
            WMod.ToDisplay = _context.Aliens
                .Include(a => a.PlanetsVisited)
                .FirstOrDefault(a => a.AlienId == id);

            WMod.PlanetDropdown = _context.Planets
                .Include(p => p.Visitors)
                .Where(p => p.PlanetId != WMod.ToDisplay.HomePlanetId && !p.Visitors.Any(v => v.AlienId == WMod.ToDisplay.AlienId))
                .ToList();
            return View("AddVisit", WMod);
        }

        [HttpPost("/aliens/{id}/addvisit")]
        public IActionResult CreateVisit(int id, AddVisitWrapper Form)
        {
            Form.VisitorForm.AlienId = id;
            _context.Add(Form.VisitorForm);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}