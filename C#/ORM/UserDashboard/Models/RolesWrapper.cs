using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserDashboard.Models
{
    public class RolesWrapper
    {
        public List<User> Users { get; set; }
    }
}