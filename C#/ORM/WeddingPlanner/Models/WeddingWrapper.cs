using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class WeddingWrapper
    {
        public User LoggedUser { get; set; }
        public List<Wedding> AllWeddings { get; set; }
    }
}