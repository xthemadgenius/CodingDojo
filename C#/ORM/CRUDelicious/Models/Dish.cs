using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get; set;}

        [Required]
        [Display(Name="Chef's Name:")]
        public string Chef {get; set;}

        [Required]
        [Display(Name="Dish Name:")]
        public string Name {get; set;}

        [Required]
        [Range(0,10000000)]
        [Display(Name="Calorie Amount:")]
        public string Calories {get; set;}

        [Required]
        [Range(0,5)]
        [Display(Name="Tastiness Rating:")]
        public string Tastiness {get; set;}

        [Required]
        [Display(Name="Description:")]
        public string Description {get; set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}