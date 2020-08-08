using System;
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
    public class Forms
    {
        [Required(ErrorMessage="First name must be entered.")]
        [MinLength(3, ErrorMessage="First name must be at least 3 characters long.")]
        [Display(Name="First Name: ")]
        public string FirstName {get; set;}

        [Required(ErrorMessage="Last Name's name must be entered.")]
        [MinLength(3, ErrorMessage="Last Name name must be at least 3 characters long.")]
        [Display(Name="Last Name: ")]
        public string LastName {get; set;}

        [Required]
        [Range(0,120, ErrorMessage="Please Put your age")]
        [Display(Name="Age: ")]
        public int Age {get; set;}

        [Required(ErrorMessage="Email is required.")]
        [DataType(DataType.EmailAddress)]
        [Display(Name="Email: ")]
        public string Email {get; set;}

        [Required(ErrorMessage="Password is required.")]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get; set;}
    }
}