using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ProdCat.Models
{

    public class Associations
    {
        [Key]
        public int AssociationId {get; set;}

        public int ProductId {get; set;}

        public Products getProduct {get; set;}

        public int CategoryId {get; set;}

        public Categories getCategory {get; set;}
    }
}