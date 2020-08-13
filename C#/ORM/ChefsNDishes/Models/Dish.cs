using System.ComponentModel.DataAnnotations;
using System;

namespace ChefsNDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId { get; set; }

        [Required]
        [Display(Name = "Dish Name:")]
        public string Name { get; set; }

        [Required]
        [Range(0, 10000000)]
        [Display(Name = "# of Calories:")]
        public int Calories { get; set; }

        [Required]
        [Range(0, 5)]
        [Display(Name = "Tastiness Rating:")]
        public int Tastiness { get; set; }

        [Required]
        [Display(Name = "Description:")]
        public string Description { get; set; }

        public int ChefId {get;set;}
        public Chef Preparer {get; set;}
        
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}