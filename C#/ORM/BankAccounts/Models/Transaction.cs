
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BankAccounts.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId {get; set;}

        [Required]
        [Display(Name = "Amount:")]
        [DataType(DataType.Currency)]
        public double Amount {get; set;}

        public int UserId {get; set;}

        public User Owner {get; set;}

        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
    }
}