using System;
using System.ComponentModel.DataAnnotations;

namespace DojoSurveyWithValidation.Models
{
    public class Users
    {
        [Required(ErrorMessage="Name must be entered.")]
        [MinLength(3, ErrorMessage="Name must be at least 3 characters long.")]
        [Display(Name="Name: ")]
        public string Name {get; set;}

        [Required(ErrorMessage="Location must be Selected.")]
        [Display(Name="Location: ")]
        public string Location {get; set;}

        [Required(ErrorMessage="Language must be Selected.")]
        [Display(Name="Favorite Languge: ")]
        public string Language {get; set;}

        [Required(ErrorMessage="A Comment is required.")]
        [MinLength(3, ErrorMessage="Comment must be at least 3 characters long.")]
        [Display(Name="Comment: ")]
        public string Comment {get; set;}
    }
}