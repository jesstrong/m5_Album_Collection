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

        //// PUT: api/Album/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutAlbum(int id, Album album)
        //{
        //    if (id != album.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(album).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!AlbumExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Album
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public Album PostAlbum([FromBody]Album album)
        {
            albumRepo.Create(album);

            return album;
        }

        //// DELETE: api/Album/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Album>> DeleteAlbum(int id)
        //{
        //    var album = await _context.Albums.FindAsync(id);
        //    if (album == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Albums.Remove(album);
        //    await _context.SaveChangesAsync();

        //    return album;
        //}

        //private bool AlbumExists(int id)
        //{
        //    return _context.Albums.Any(e => e.Id == id);
        //}
    }
}
