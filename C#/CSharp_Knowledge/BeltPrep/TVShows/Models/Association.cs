using System;
using System.ComponentModel.DataAnnotations;

namespace TVShows.Models
{
    public class ShowOnNetwork
    {
        [Key]
        public int ShowOnNetworkId { get; set; }

        public int ShowId { get; set; }
        public Show Show { get;set;}

        [Display(Name="Choose a Network: ")]
        public int NetworkId { get;set; }
        public Network Network { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}