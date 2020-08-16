using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProdNCat.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required(ErrorMessage = "Product Name is required")]
        [Display(Name = "Name: ")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Product Description is required")]
        [Display(Name = "Description: ")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Product Price is required")]
        [Display(Name = "Price: ")]
        public decimal Price { get; set; }

        public List<Association> Categories { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}