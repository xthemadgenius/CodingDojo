using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserDashboard.Models
{
    public class ProfileWrapper
    {
        public List<User> Users { get; set; }

        public string Description {get; set;}
    }
}