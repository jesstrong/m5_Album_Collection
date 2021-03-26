﻿using System;
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
    public class SongController : ControllerBase
    {
        IRepository<Song> songRepo;

        public SongController(IRepository<Song> songRepo)
        {
            this.songRepo = songRepo;
        }

        // GET: api/Song
        [HttpGet]
        public IEnumerable<Song> GetSongs()
        {
            return songRepo.GetAll();
        }

        // GET: api/Song/5
        [HttpGet("{id}")]
        public Song GetSong(int id)
        {
            var song = songRepo.GetById(id);
            return song;
        }

        //// PUT: api/Song/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutSong(int id, Song song)
        //{
        //    if (id != song.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(song).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!SongExists(id))
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

        // POST: api/Song
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public Song PostSong([FromBody]Song song)
        {
            songRepo.Create(song);
            return song;
        }

        //// DELETE: api/Song/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Song>> DeleteSong(int id)
        //{
        //    var song = await _context.Songs.FindAsync(id);
        //    if (song == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Songs.Remove(song);
        //    await _context.SaveChangesAsync();

        //    return song;
        //}

        //private bool SongExists(int id)
        //{
        //    return _context.Songs.Any(e => e.Id == id);
        //}
    }
}
