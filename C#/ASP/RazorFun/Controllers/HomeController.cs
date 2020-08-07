using Microsoft.AspNetCore.Mvc;
namespace YourNamespace.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??copy
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "Hello World from Bean Daddy!";
        }

        [HttpGet]       //type of request
        [Route("about")]     //associated route string (exclude the leading /)
        public ViewResult About()
        {
            return View("Index");
        }
    }
}