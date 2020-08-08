using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DojoSurveyWithValidation.Models;

namespace DojoSurveyWithValidation.Controllers
{
    public class SurveyController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")]
        public ViewResult Result(Users user)
        {
            if(ModelState.IsValid)
            {
                return View("Result", user);
            }
            else
            {
                return Index();
            }
        }
    }
}