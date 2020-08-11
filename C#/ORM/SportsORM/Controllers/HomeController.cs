using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.One = _context.Leagues.Where(w => w.Name.Contains("Women")).ToList();
            ViewBag.Two = _context.Leagues.Where(h => h.Name.Contains("Hockey")).ToList();
            ViewBag.Three = _context.Leagues.Where(f => !f.Name.Contains("Football")).ToList();
            ViewBag.Four = _context.Leagues.Where(c => c.Name.Contains("Conference")).ToList();
            ViewBag.Five = _context.Leagues.Where(a => a.Name.Contains("Atlantic")).ToList();   
            ViewBag.Six = _context.Teams.Where(d => d.Location == "Dallas").ToList();
            ViewBag.Seven = _context.Teams.Where(r => r.TeamName == "Raptors").ToList();
            ViewBag.Eight = _context.Teams.Where(c => c.Location.Contains("City")).ToList();
            ViewBag.Nine = _context.Teams.Where(t => t.TeamName.StartsWith("T")).ToList();
            ViewBag.Ten = _context.Teams.OrderBy(l => l.Location).ToList();
            ViewBag.Eleven = _context.Teams.OrderByDescending(b => b.TeamName).ToList();
            ViewBag.Twelve  = _context.Players.Where(c => c.LastName == "Cooper").ToList(); 
            ViewBag.Thirteen  = _context.Players.Where(j => j.FirstName == "Joshua").ToList();
            ViewBag.Fourteen  = _context.Players.Where(n => n.LastName == "Cooper" && n.FirstName != "Joshua").ToList();
            ViewBag.Fifteen  = _context.Players.Where(n => n.FirstName == "Alexander" || n.FirstName == "Wyatt").ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}