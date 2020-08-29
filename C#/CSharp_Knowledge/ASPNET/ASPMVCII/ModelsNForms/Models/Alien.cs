using System;
using System.ComponentModel.DataAnnotations;

namespace ModelsNForms.Models
{
    public class Alien
    {
        [Required(ErrorMessage="Alien's name must be entered.")]
        [MinLength(3, ErrorMessage="Alien's name must be at least 3 characters long.")]
        [Display(Name="Name: ")]
        public string Name { get; set; }

        [Required(ErrorMessage="Home Planet is required.")]
        [MinLength(2, ErrorMessage="Home planet must be at least 2 characters long.")]
        [MaxLength(100, ErrorMessage="I know alien words are weird, but please shorten the name to at most 100 characters.")]
        [Display(Name="Home Planet: ")]
        public string HomePlanet { get; set; }
        
        [Required(ErrorMessage="You must enter the distance from your home planet.")]
        [Range(1,Double.PositiveInfinity)]
        [Display(Name="Distance From Home Planet: ")]
        public int? DistanceFromHome { get; set; }
    }
}