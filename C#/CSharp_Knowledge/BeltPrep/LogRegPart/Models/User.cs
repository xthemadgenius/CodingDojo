using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LogRegPart.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required(ErrorMessage="First name is required.")]
        [MinLength(2, ErrorMessage="First name must be at least 2 characters.")]
        [Display(Name="First Name: ")]
        public string FirstName { get; set; }

        [Required(ErrorMessage="Last name is required.")]
        [Display(Name="Last Name: ")]
        public string LastName { get; set; }

        [Required(ErrorMessage="Email address is required.")]
        [EmailAddress(ErrorMessage="Invalid email address.")]
        [Display(Name="Email: ")]
        public string Email { get; set; }

        [Required(ErrorMessage="Password is required.")]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        [Stupid]
        public string Password { get; set; }

        [Required(ErrorMessage="Confirm your password.")]
        [DataType(DataType.Password)]
        [Display(Name="Confirm: ")]
        [Compare("Password", ErrorMessage="Please ensure that your passwords match.")]
        [NotMapped]
        public string Confirm { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}