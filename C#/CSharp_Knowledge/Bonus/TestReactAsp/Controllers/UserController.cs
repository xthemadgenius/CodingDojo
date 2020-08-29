using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestReactAsp.Models;

namespace TestReactAsp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private MyContext _context { get; }

        public UserController(MyContext context)
        {
            _context = context;
        }

        // GET: localhost:5000/api/user/all
        [HttpGet("all")]
        public IEnumerable<User> Get()
        {
            return _context.Users;
        }

        [HttpPost]
        public User Post(User ToCreate)
        {
            if(ModelState.IsValid)
            {
                _context.Add(ToCreate);
                _context.SaveChanges();
                return ToCreate;
            }
            else 
            {
                return ToCreate;
            }
        }
    }
}
