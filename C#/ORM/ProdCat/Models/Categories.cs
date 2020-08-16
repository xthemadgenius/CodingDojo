using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ProdCat.Models
{
    public class Categories
    {
        [Key]
        public int CategoryId {get; set;}

        [Required]
        public string Name {get; set;}

        public DateTime CreatedAt {get; set;} = DateTime.Now;

        public DateTime UpdatedAt {get; set;} = DateTime.Now;

        public List<Associations> myAssociation {get; set;}

    }
}