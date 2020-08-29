using System;
using System.ComponentModel.DataAnnotations;

namespace EntityIntro.Models
{
    public class Intruder
    {
        [Key]
        public int IntruderId { get; set; }

        [Required(ErrorMessage="Even though you can't remember it, please give me your name.")]
        [Display(Name="Name: ")]
        public string Name { get; set; }

        [Required(ErrorMessage="I need this for the police report.")]
        [Display(Name="Age: ")]
        public int? Age { get; set; }

        [Display(Name="Are they high: ")]
        public bool IsHigh { get; set; }

        [Required(ErrorMessage="You have to say something when you break in.")]
        [Display(Name="Catch Phrase: ")]
        public string CatchPhrase { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}