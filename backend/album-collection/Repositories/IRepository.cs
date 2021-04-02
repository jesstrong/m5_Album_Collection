using album_collection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Repositories
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Create(T entity);
        void Delete(T entity);
        void Update(T entity);
        void LoadProxy(T entity, string include);

        //Album GetAlbumByArtistId(int id);
    }
}
