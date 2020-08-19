using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Commerce.Models
{
    public class ShopperWrapper
    {
        public Order AddOrder { get; set; }
        public List<Order> AllOrders { get; set; }
        public List<Customer> AllCustomers { get; set; }
        public List<Product> AllProducts { get; set; }
    }
}