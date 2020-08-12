using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models
{
    public class LoginUser
    {
        [Required]
        [EmailAddress]
        [Display(Name = "First Name:")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Last Name:")]
        public string Password { get; set; }
    }
}