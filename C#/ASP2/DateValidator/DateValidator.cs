using System;
using System.ComponentModel.DataAnnotations;

namespace Valdiations
{
    public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime dt;
        if(value is DateTime)
        {
            dt = (DateTime)value;
        }
        else
        {
            return ValidationResult("Invaild Date Time");
        }
        if(dt < DateTime.Now)
        {
            return new ValidationResult("Date must be a later Date");
        }
        return ValidationResult.Success;
    }
}
}