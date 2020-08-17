using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class User
    {
        [Key]
        public int UserId {get; set;}

        [Required(ErrorMessage="First name is required.")]
        [MinLength(2, ErrorMessage="First name must be at least 2 characters.")]
        [Display(Name="First Name: ")]
        public string FirstName {get; set;}

        [Required(ErrorMessage="Last name is required.")]
        [MinLength(2, ErrorMessage="Last name must be at least 2 characters.")]
        [Display(Name="Last Name: ")]
        public string LastName {get; set;}

        [Required(ErrorMessage="Email is required.")]
        [EmailAddress(ErrorMessage="Invalid email address")]
        [Display(Name="Email: ")]
        public string Email {get; set;}

        [Required(ErrorMessage="Password is required.")]
        [MinLength(8, ErrorMessage="Password must be at least 8 characters.")]
        [Display(Name="Password: ")]
        [DataType(DataType.Password)]
        public string Password {get; set;}

        [NotMapped]
        [Display(Name="Confirm Password: ")]
        [DataType(DataType.Password)]
        public string Confirm {get; set;}

        public List<Wedding> WeddingsPlanned { get; set; }

        public List<RSVP> WeddingsAttending { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}