
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankAccounts.Models
{
    public class User
    {
        [Key]
        public int UserId {get; set;}

        [Required]
        [MinLength(2, ErrorMessage = "First name must be at least 2 characters")]
        [Display(Name = "First Name:")]
        public string FirstName {get; set;}

        [Required]
        [MinLength(2, ErrorMessage = "Last name must be at least 2 characters")]
        [Display(Name = "Last Name:")]
        public string LastName {get; set;}

        [Required]
        [EmailAddress]
        [RegularExpression(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*", ErrorMessage = "Invalid email Address")]
        [Display(Name = "Email:")]
        public string Email {get; set;}

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
        [Display(Name = "Password:")]
        public string Password {get; set;}

        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Doesn't match Password")]
        [Display(Name = "Confirm Password:")]
        public string Confirm {get; set;}

        public double Balance {get; set;} = 0;

        public List<Transaction> Transactions {get;set;}

        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
    }
}