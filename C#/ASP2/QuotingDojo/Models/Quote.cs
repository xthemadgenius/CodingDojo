using System;
using System.ComponentModel.DataAnnotations;

namespace QuotingDojo.Models
{
    public class Quote
    {
        [Required]
        [Display(Name = "Your Name:")]
        public string User {get; set;}

        [Required]
        [Display(Name = "Your Quote:")]
        public string Content {get; set;}
    }
}