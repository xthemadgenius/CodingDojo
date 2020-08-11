using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using QuotingDojo.Models;

namespace QuotingDojo.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet("quotes")]
        public IActionResult Quotes()
        {
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query($"SELECT * FROM quotes ORDER BY Created_At DESC");
            // To provide this data, we could use ViewBag or a View Model.  ViewBag shown here:
            ViewBag.Quotes = AllQuotes;
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Quote quote)
        {
            if(ModelState.IsValid)
            {
                string sql = $@"INSERT INTO quotes (User, Content, Created_at) VALUES ('{quote.User}', '{quote.Content}', NOW())";
                DbConnector.Execute(sql);
                return RedirectToAction("Quotes");
            }
            return View("Index");
        }
    }
}