using System.Collections.Generic;
namespace TVShows.Models
{
    public class OneShowWrapper
    {
        public int LoggedId { get; set; }
        public Show Show { get; set; }
        public ShowOnNetwork AddNetForm { get; set; }
        public List<Network> AllNetworks { get; set; }
    }
}