using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace E_Commerce.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        
        [Required(ErrorMessage = "Customer name is required.")]
        [Display(Name = "Customer Name:")]
        public string Name { get; set; }
        public List<Order> Orders { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

    }
}