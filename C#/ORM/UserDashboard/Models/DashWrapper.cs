using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserDashboard.Models
{
    public class DashWrapper
    {
        public int UserId {get; set;}
        public User NewUsers { get; set; }
        public List<User> Users { get; set; }
    }
}