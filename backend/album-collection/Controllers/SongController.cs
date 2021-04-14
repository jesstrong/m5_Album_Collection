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

        // PUT: api/Song/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public Song PutSong(int id, Song song)
        {
            if (id != song.Id)
            {
                return null;
            }

            return song;
        }

        // POST: api/Song
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public IEnumerable <Song> PostSong([FromBody]Song song)
        {
            songRepo.Create(song);
            return songRepo.GetAll();
        }

        // DELETE: api/Song/5
        [HttpDelete("{id}")]
        public string DeleteSong(int id)
        {
            var song = songRepo.GetById(id);

            songRepo.Delete(song);

            return "Song successfully deleted";
        }

        //private bool SongExists(int id)
        //{
        //    return _context.Songs.Any(e => e.Id == id);
        //}
    }
}
