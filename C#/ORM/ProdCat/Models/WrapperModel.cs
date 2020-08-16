using Microsoft.EntityFrameworkCore;
using System; 
using System.Collections.Generic;

namespace ProdCat.Models
{
    public class WrapperViewModel
    {
        public Products NewProducts {get; set;}

        public List<Products> ListProducts {get; set;}

        public Associations association {get; set;}
        
        public List<Associations> ListAssociation {get; set;}

        public Categories NewCategories {get; set;}

        public List<Categories> ListCategories {get; set;}
    }
}