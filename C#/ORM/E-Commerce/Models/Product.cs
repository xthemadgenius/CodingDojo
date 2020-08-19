using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace E_Commerce.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required(ErrorMessage = "Product name is required.")]
        [Display(Name = "Name:")]
        public string Name { get; set; }

        [Required (ErrorMessage = "Product Quantity is required.")]
        [Display(Name = "Initial Quantity:")]
        public int Quantity { get; set; }

        [Required (ErrorMessage = "Product ImageUrl is required.")]
        [Display(Name = "Image (url):")]
        public string ImageUrl { get; set; }

        [Required (ErrorMessage = "Product Description is required.")]
        [Display(Name = "Description:")]
        public string Description { get; set; }

        public List<Order> Orders { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}