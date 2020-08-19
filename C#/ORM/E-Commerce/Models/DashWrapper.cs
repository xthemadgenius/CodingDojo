using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Commerce.Models
{
    public class DashWrapper
    {
        public List<Product> AllProducts { get; set; }
        public List<Order> RecentOrders { get; set; }
        public List<Customer> NewCustomers { get; set; }
    }
}