using System.Collections.Generic;

namespace TVShows.Models
{
    public class ShowsWrapper
    {
        public User LoggedUser { get; set; }
        public List<Show> AllShows { get; set; }
    }
}