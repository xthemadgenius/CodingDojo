using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductsAndCategories.Models
{
    public class Product
    {
        [Key]
        public int ProductId {get; set;}

        [Required]
        [Display(Name = "Name:")]
        public string Name {get; set;}

        [Required]
        [DataType(DataType.Currency)]
        [Display(Name = "Price:")]
        public double Price {get; set;}

        [Required]
        [Display(Name = "Description:")]
        public string Description {get; set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        public List<Association> Associations { get; set; }
    }
}