using Microsoft.AspNetCore.Mvc;
namespace Portfolio1.Controllers     //be sure to use your own project's namespace!
{
    public class HomeController : Controller   //remember inheritance??copy
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "This is my index";
        }

        [HttpGet]       //type of request
        [Route("projects")]     //associated route string (exclude the leading /)
        public string Project()
        {
            return "These are my Projects";
        }

        [HttpGet]       //type of request
        [Route("contact")]     //associated route string (exclude the leading /)
        public string Contact()
        {
            return "This is my Contact";
        }
    }
}