using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace O2MIntro.Models
{
    public class HomePlanet
    {
        [Key]
        public int HomePlanetId { get; set; }

        public string Name { get; set; }
        // Navigation property for all the aliens
        // in this one to many relationship
        public List<Alien> Aliens { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}