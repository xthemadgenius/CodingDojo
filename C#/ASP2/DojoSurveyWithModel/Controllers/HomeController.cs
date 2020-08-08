using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DojoSurveyWithModel.Models;

namespace DojoSurveyWithModel.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller
    {
        [HttpGet]    
        [Route("")] 
        public string Index()
        {
            return "Hello World from HomeController!";
        }
    }
}