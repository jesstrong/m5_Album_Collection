export default function Artists(artists) {
    return `
        <h1>Artist List</h1>
            <ul>
                ${artists.map(artist =>{
                    return `
                        <li>
                            <div class="content_artist">
                                <h4 id="${artist.id}"> ${artist.name}</h4>
                                Artist Age: ${artist.age}
                                Record Label: ${artist.recordLabel}
                                Artist Hometown: ${artist.hometown}
                            </div>
                        </li>
                    `
                }).join('')}
            </ul>

        <section class="artist_addArtist">
            <input type='text' class="artistName" PlaceHolder="Add a New Artist" />
            <button class="artistAddButton">Add Artist</button>
        </section>
    
    `; 
}