using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int Age { get; set; } // Additional Info
        public string recordLabel { get; set; } // Additional Info
        public string Hometown { get; set; } // Additional Info
        public virtual ICollection<Album> Albums { get; set; }
    }
}
