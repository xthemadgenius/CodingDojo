using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Dojodachi.Models;

namespace Dojodachi.Controllers     //be sure to use your own project's namespace!
{
    public class DojodachiController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            return View("Index");
        }
    }
}