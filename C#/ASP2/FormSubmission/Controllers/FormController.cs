using System;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers     //be sure to use your own project's namespace!
{
    public class FormController : Controller
    {
        [HttpGet("")] 
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpPost("result")] 
        public ViewResult ResultSubmission(Forms user)
        {
            if(ModelState.IsValid)
            {
                return View("ResultSubmission", user);
            }
            else
            {
                return View("Index");
            }
        }
    }
}