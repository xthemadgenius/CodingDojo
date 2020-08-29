using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace M2MIntro.Models
{
    public class Alien
    {
        [Key]
        public int AlienId { get; set; }
        
        public string Name { get; set; }

        public int HomePlanetId { get; set; }
        public Planet HomePlanet { get; set; }

        public List<Visitor> PlanetsVisited { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}