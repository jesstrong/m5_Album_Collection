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
    public class AlbumController : ControllerBase
    {
        IRepository<Album> albumRepo;

        public AlbumController(IRepository<Album> albumRepo)
         {
            this.albumRepo = albumRepo;
        }

        // GET: api/Album
        [HttpGet]
        public IEnumerable<Album> GetAlbums()
        {
            return albumRepo.GetAll();
        }

        // GET: api/Album/5
        [HttpGet("{id}")]
        public Album GetAlbum(int id)
        {
            var album = albumRepo.GetById(id);
            return album;
        }

        // PUT: api/Album/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public Album PutAlbum(int id, Album album)
        {
            if (id != album.Id)
            {
                return null;
            }

            albumRepo.Update(album);

            return album;
        }

        // POST: api/Album
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public Album PostAlbum([FromBody]Album album)
        {
            albumRepo.Create(album);

            return album;
        }

        // DELETE: api/Album/5
        [HttpDelete("{id}")]
        public string DeleteAlbum(int id)
        {
            var album = albumRepo.GetById(id);

            albumRepo.Delete(album);

            return "Album successfully deleted";
        }

        //private bool AlbumExists(int id)
        //{
        //    return _context.Albums.Any(e => e.Id == id);
        //}
    }
}
