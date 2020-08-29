using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
            // All teams, past and present, that Samuel Evans has played with
            ViewBag.SamEvans = _context.Teams
                .Include(t => t.CurrentPlayers)
                .Include(t => t.AllPlayers)
                .ThenInclude(a => a.PlayerOnTeam)
                .Where(t => t.CurrentPlayers.Any(p => p.FirstName == "Samuel" && p.LastName == "Evans") 
                            ||
                            t.AllPlayers.Any(p => p.PlayerOnTeam.FirstName == "Samuel" && p.PlayerOnTeam.LastName == "Evans"))
                .ToList();

            // All players, past and present, who played for the Manitoba Tiger Cats
            ViewBag.TigerCats = _context.Players
                .Include(p => p.CurrentTeam)
                .Include(p => p.AllTeams)
                .ThenInclude(a => a.TeamOfPlayer)
                .Where(p => p.CurrentTeam.TeamName == "Tiger-Cats"
                            ||
                            p.AllTeams.Any(t => t.TeamOfPlayer.TeamName == "Tiger-Cats"))
                .ToList();

            // All players who formerly and not currently played for the Wichita Vikings
            ViewBag.ExVikings = _context.Players
                .Include(p => p.CurrentTeam)
                .Include(p => p.AllTeams)
                .ThenInclude(a => a.TeamOfPlayer)
                .Where(p => (p.CurrentTeam.TeamName != "Vikings" && p.CurrentTeam.Location != "Wichita")
                            &&
                            (p.AllTeams.Any(t => t.TeamOfPlayer.TeamName == "Vikings") && p.AllTeams.Any(t => t.TeamOfPlayer.Location == "Wichita")))
                .ToList();

            // everyone named "Joshua" who has ever played in the Atlantic Federation of Amateur Baseball Players
            ViewBag.JoshAmBP = _context.Players
                .Include(p => p.CurrentTeam)
                .ThenInclude(t => t.CurrLeague)
                .Include(p => p.AllTeams)
                .ThenInclude(a => a.TeamOfPlayer)
                .ThenInclude(t => t.CurrLeague)
                .Where(p => p.FirstName == "Joshua"
                        &&
                        (
                            p.CurrentTeam.CurrLeague.Name == "Atlantic Federation of Amateur Baseball Players"
                            ||
                            p.AllTeams.Any(a => a.TeamOfPlayer.CurrLeague.Name == "Atlantic Federation of Amateur Baseball Players")
                        ))               
                .ToList();

            // All teams who have had 12 or more players, past and present
            ViewBag.TwelvePlus = _context.Teams
                .Include(t => t.CurrentPlayers)
                .Include(t => t.AllPlayers)
                .Where(t => t.CurrentPlayers.Count + t.AllPlayers.Count >= 12)
                .ToList();

            // All players sorted by the number of teams they've played for
            ViewBag.AllSorted = _context.Players
                .Include(p => p.CurrentTeam)
                .Include(p => p.AllTeams)
                .ThenInclude(t => t.TeamOfPlayer)
                .OrderByDescending(p => p.AllTeams.Count)
                .ToList();
            return View();
        }

    }
}