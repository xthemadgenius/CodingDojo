using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace E_Commerce.Models
{
    public class CustomerWrapper
    {
        public Customer NewCustomer { get; set; }
        public List<Customer> AllCustomers { get; set; }
    }
}