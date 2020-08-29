using System;
using System.ComponentModel.DataAnnotations;

namespace LogRegPart.Models
{
    public class StupidAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // HINT HINT AGE VALIDATION
            // if((DateTime.Today - Convert.ToDateTime(value)).Days/365.25 < 18)
            //     return new ValidationResult("You're too young.");

            if(((string)value).Contains("12345") || ((string)value).Contains("abcde"))
            {
                return new ValidationResult("That's literally like, the least secure password in existence. Do you even have a brain?");
            }
            else
            {
                return ValidationResult.Success;
            }
            
        }
    }
}