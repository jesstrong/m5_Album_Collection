using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using album_collection;
using album_collection.Models;
using album_collection.Repositories;

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        IRepository<Artist> artistRepo;

        public ArtistController(IRepository<Artist> artistRepo)
        {
            this.artistRepo = artistRepo;
        }

        // GET: api/Artist
        [HttpGet]
        public IEnumerable<Artist> GetArtists()
        {
            return artistRepo.GetAll();
        }

        // GET: api/Artist/5
        [HttpGet("{id}")]
        public Artist GetArtist(int id)
        {
            var artist = artistRepo.GetById(id);
            return artist;
        }

        // PUT: api/Artist/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public Artist PutArtist(int id, Artist artist)
        {
            if (id != artist.Id)
            {
                return null;
            }

            artistRepo.Update(artist);

            return artist;
        }

        //// POST: api/Artist
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public Artist PostArtist([FromBody]Artist artist)
        {
            artistRepo.Create(artist);
            
            return artist;
        }

        // DELETE: api/Artist/5
        [HttpDelete("{id}")]
        public string DeleteArtist(int id)
        {
            var artist = artistRepo.GetById(id);

            artistRepo.Delete(artist);

            return "Artist successfully deleted";
        }

        //private bool ArtistExists(int id)
        //{
        //    return _context.Artists.Any(e => e.Id == id);
        //}
    }
}
