export default function Artist(artist) {
    if(artist.albums == null){
        artist.albums = [];
    }

        return `
            <h1>${artist.name}</h1>
            <ol>
            ${artist.albums.map(album =>{
                return `
                    <li>
                        ${album.name}
                    </li>
                `
            }).join('')}
            </ol>
    
            <section class="artist_addAlbum">
                <label>Album Name:</label>
                <input type='text' class="albumName" PlaceHolder="Add a New Album" />
                </br>
                <button class="albumAddButton" id="${artist.id}">Add Album</button>
            </section>
    
        `
    // }

}