using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace M2MIntro.Models
{
    public class Planet
    {
        [Key]
        public int PlanetId { get; set; }

        public string Name { get; set; }
        public List<Alien> Aliens { get; set; }

        public List<Visitor> Visitors { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}