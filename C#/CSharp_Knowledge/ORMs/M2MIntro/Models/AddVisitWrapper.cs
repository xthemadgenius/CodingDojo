using System;
using System.Collections.Generic;

namespace M2MIntro.Models
{
    public class AddVisitWrapper
    {
        public Alien ToDisplay { get; set; }
        public Visitor VisitorForm { get; set; }
        public List<Planet> PlanetDropdown { get; set; }
    }
}