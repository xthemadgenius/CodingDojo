using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UserDashboard.Models
{
    public class LogRegWrapper
    {
        public List<User> AllUsers {get; set;}

        public List<LoginUser> LoginUsers {get; set;}

        public User Register {get; set;}

        public LoginUser Login {get; set;}
    }
}