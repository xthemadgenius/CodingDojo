using System;
using System.ComponentModel.DataAnnotations;

namespace SimpleLoginRegistration.Models
{
    public class RegisterUser
    {
        [Required]
        [MinLength(2, ErrorMessage = "First name must be at least 2 characters")]
        [Display(Name = "First Name")]
        public string FirstName {get;set;}

        [Required]
        [MinLength(2, ErrorMessage = "Last name must be at least 2 characters")]
        [Display(Name = "Last Name")]
        public string LastName {get;set;}

        [Required(ErrorMessage="Email is required.")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*", ErrorMessage = "Invalid email format")]
        [Display(Name="Email: ")]
        public string Email {get;set;}

        [Required(ErrorMessage="Password is required.")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get;set;}

        [Required(ErrorMessage="Password Confirm is required.")]
        [Compare("Password", ErrorMessage = "Password must match confirmation")]
        [DataType(DataType.Password)]
        [Display(Name="Confirm Password: ")]
        public string ConfirmPassword {get;set;}
    }
}