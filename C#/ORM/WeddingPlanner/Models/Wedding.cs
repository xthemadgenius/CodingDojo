using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId {get; set;}

        [Required(ErrorMessage="Please fill husbands name")]
        [Display(Name="Wedder One: ")]
        public string WedderOne {get; set;}

        [Required(ErrorMessage="Please fill Wifes name")]
        [Display(Name="Wedder Two: ")]
        public string WedderTwo {get; set;}

        [Required(ErrorMessage="What is the Date of the Wedding")]
        [Display(Name="Date: ")]
        [DataType(DataType.Date)]
        public DateTime? Date {get; set;}

        [Required(ErrorMessage="What is the Wedding Location?")]
        [Display(Name="Address: ")]
        public string Address {get; set;}

        public int UserId { get; set; }
        public User Planner { get; set; }

        public List<RSVP> GuestsAttending { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}