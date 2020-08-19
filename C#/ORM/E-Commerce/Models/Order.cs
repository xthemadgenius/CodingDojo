using System;
using System.ComponentModel.DataAnnotations;

namespace E_Commerce.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        public int CustomerId { get; set; }
        public Customer Buyer { get; set; }

        public int ProductId { get; set; }
        public Product ItemBought { get; set; }

        [Required (ErrorMessage = "Product Description is required.")]
        [Display(Name = "Quantity:")]
        public int Quantity { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

    }
}