using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        public List<User> CreateUsers()
        {
            return new List<User>
            {
                new User(){FirstName="Bob", LastName="Ross"},
                new User(){FirstName="Taylor", LastName="Ross"},
                new User(){FirstName="Bob", LastName="Ryan"},
                new User(){FirstName="Troty", LastName="Ross"}
            };
        }

        [HttpGet]    
        [Route("")] 
        public ViewResult Index()
        {
            string msg = "Welcome to the Show";
            return View("Index", msg);
        }

        [HttpGet("numbers")] 
        public ViewResult Numbers()
        {
            int[] num = {1,2,3,4,5,6};
            return View(num);
        }

        [HttpGet("users")] 
        public ViewResult Users()
        {
            var users = CreateUsers();
            return View(users);
        }

        [HttpGet("user")] 
        public ViewResult User()
        {
            var rand = new Random();
            var users = CreateUsers();
            var user = users[rand.Next(users.Count)];
            return View(user);
        }
    }
}