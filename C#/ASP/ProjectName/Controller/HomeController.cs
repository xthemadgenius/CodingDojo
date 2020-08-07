using Microsoft.AspNetCore.Mvc;
namespace ProjectName.Controllers     //be sure to use your own project's namespace!
{
    public class HomController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "Hello World from HomeController!";
        }

        [HttpGet("about")]
// GET requests to "localhost:5000/about" go here
        public string About()
        {
            return "Mexico is for Mexicans";
        }

        [HttpGet]
        [Route("pizza/{topping}")]
        public string PizzaParty(string topping)
        {
            return $"Who's ready for a {topping} Pizza!";
        }
    }
}