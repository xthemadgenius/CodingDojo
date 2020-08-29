using System;
using Microsoft.AspNetCore.Mvc;
using ModelsNForms.Models;


namespace ModelsNForms.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   
    {
        //for each route this controller is to handle:
        [HttpGet("")]     //Http Method and the route
        public IActionResult Index() //When in doubt, use IActionResult
        {   
            Alien sadie = new Alien();
            sadie.Name = "Sadie";
            sadie.HomePlanet = "Kung Fu Vampars";
            sadie.DistanceFromHome = 982374;
            

            // int myNum = 98274398;
            return View("Index", sadie); //or whatever you want to return
        }

        [HttpGet("alien/new")]
        public ViewResult NewAlien()
        {
            return View("NewAlien");
        }

        [HttpPost("alien/create")]
        public ViewResult AlienSubmission(Alien FromForm)
        {
            if(ModelState.IsValid)
            {
                return View("AlienSubmission", FromForm);
            }
            else
            {
                return NewAlien();
            }
        }
    }
}