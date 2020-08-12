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
            return View("Index");
        }
    }
}