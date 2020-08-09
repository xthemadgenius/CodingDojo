using System;
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

        [HttpPost("login")] 
        public ViewResult Login(LoginUser user)
        {
            if(ModelState.IsValid)
            {
                return View("Success", user);
            }
            else
            {
                return View("Index");
            }
        }

        [HttpPost("register")] 
        public ViewResult Register(RegisterUser user)
        {
            if(ModelState.IsValid)
            {
                return View("Success", user);
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("success")] 
        public ViewResult Result()
        {
            return View("Success");
        }
    }
}