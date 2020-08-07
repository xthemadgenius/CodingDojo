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
    }
}