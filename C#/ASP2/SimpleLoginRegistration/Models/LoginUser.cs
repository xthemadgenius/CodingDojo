using System.ComponentModel.DataAnnotations;

namespace SimpleLoginRegistration.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage="Email is required.")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*", ErrorMessage = "Invalid email format")]
        [Display(Name="Email: ")]
        public string Email {get;set;}

        [Required(ErrorMessage="Password is required.")]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get;set;}
    }
}