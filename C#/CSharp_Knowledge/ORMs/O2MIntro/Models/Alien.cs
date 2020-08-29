using System;
using System.ComponentModel.DataAnnotations;

namespace O2MIntro.Models
{
    public class Alien
    {
        [Key]
        public int AlienId { get; set; }

        public string Name { get; set; }


        public int HomePlanetId { get; set; }
        // Navigation property to the HomePlanet entry in our
        // database that this HomePlanetId is linked to:
        public HomePlanet HomePlanet { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}