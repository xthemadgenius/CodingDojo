using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TVShows.Extensions;

namespace TVShows.Models
{
    public class Show
    {
        [Key]
        public int ShowId { get; set; }

        [Required(ErrorMessage="Title is required.")]
        [MinLength(2, ErrorMessage="Show title must be at least 2 characters long.")]
        [Display(Name="Title: ")]
        public string Title { get; set; }

        [Required(ErrorMessage="Release date is required.")]
        [PastDate]
        [Display(Name="Release Date: ")]
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

        [MinLength(10, ErrorMessage="Description must be at least 10 characters long.")]
        [DataType(DataType.MultilineText)]
        [Display(Name="Description: ")]
        public string Description { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public List<ShowOnNetwork> ShowOnNetworks { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}