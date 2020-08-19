using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Commerce.Models
{
    public class ProdWrapper
    {
        public Product AddProduct { get; set; }
        public List<Product> AllProducts { get; set; }
    }
}