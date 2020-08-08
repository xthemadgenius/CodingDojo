using System;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWithModel.Models;

namespace DojoSurveyWithModel.Controllers
{
    public class SurveyController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")]
        public ViewResult ResultSubmission(User user)
        {
            return View("ResultSubmission", user);
        }
    }
}