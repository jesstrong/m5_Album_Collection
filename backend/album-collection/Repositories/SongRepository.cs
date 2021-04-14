﻿using album_collection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Repositories
{

    public class SongRepository : Repository<Song>, IRepository<Song>
    {
        public SongRepository(MusicContext context) : base(context)
        {
        }
    }
}
