using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId { get; set; }

        [Required]
        [Display(Name = "First Name:")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name:")]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth")]
        public DateTime DOB { get; set; }

        public List<Dish> Dishes {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}