using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace M2MIntro.Models
{
    public class Visitor
    {
        [Key]
        public int VisitorId { get; set; }

        public int AlienId { get; set; }
        // Navigation property to access the aliens
        // in the relationship
        public Alien Alien { get; set; }

        public int PlanetId { get; set; }
        // Navigation property to access the planets
        // in the relationship
        public Planet Planet { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}