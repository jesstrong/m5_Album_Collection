using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Album
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Image { get; set; }

        public string recordLabel { get; set; }
        
        public virtual ICollection<Song> Songs { get; set; }
        public int ArtistId { get; set; }
        
        public virtual Artist Artists { get; set; }
    }
}
