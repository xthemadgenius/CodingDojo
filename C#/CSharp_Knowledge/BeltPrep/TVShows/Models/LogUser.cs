using System.ComponentModel.DataAnnotations;

namespace TVShows.Models
{
    public class LogUser
    {
        [Required(ErrorMessage="Please enter your email.")]
        [Display(Name="Email: ")]
        public string LogEmail { get; set; }

        [Required(ErrorMessage="Please enter your password.")]
        [Display(Name="Password: ")]
        [DataType(DataType.Password)]
        public string LogPass { get; set; }
    }
}