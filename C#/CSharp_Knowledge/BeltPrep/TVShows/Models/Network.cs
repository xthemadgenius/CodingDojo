using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TVShows.Models
{
    public class Network
    {
        [Key]
        public int NetworkId { get; set; }

        [Required(ErrorMessage="Network name is required.")]
        [MinLength(2, ErrorMessage="Network name must be at least 2 characters long.")]
        [Display(Name="Network Name: ")]
        public string Name { get; set; }

        // Nav props
        public List<ShowOnNetwork> ShowOnNetworks { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

    }
}