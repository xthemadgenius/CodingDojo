using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using SimpleLoginRegistration.Models;

namespace SimpleLoginRegistration.Controllers     //be sure to use your own project's namespace!
{
    public class LogRegController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            return View("Index");
        }
    }
}