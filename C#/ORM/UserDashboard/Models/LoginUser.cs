using System.ComponentModel.DataAnnotations;

namespace UserDashboard.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage="Need an Email")]
        [EmailAddress(ErrorMessage="Invalid Email Try another one")]
        [Display(Name="Email: ")]
        public string Email {get; set;}

        [Required(ErrorMessage="Need an Password")]
        [DataType(DataType.Password)]
        [Display(Name="Password: ")]
        public string Password {get; set;}
    }
}