export default function Artist(artist) {
    if(artist.albums == null){
        artist.albums = [];
    }

        return `
        <h1>Edit Artist</h1>
            <h1>
            <input type='text' id='artistName' value='${artist.name}' />
            <section class='editArtistForm'>
            <input type='hidden' id='artistAge' value='${artist.age}' />
            <input type='hidden' id='artistHometown' value='${artist.hometown}' />
            <input type='hidden' id='artistRecordLabel' value='${artist.recordLabel}' />

            <input type='hidden' id='artistId' value='${artist.id}' />
            <button id='btnEditArtist'>Save</button>
            </section>
            </h1>
            <ol>
            ${artist.albums.map(album =>{
                return `
                    <li>
                        ${album.title}
                    </li>
                `
            }).join('')}
            </ol>
            

            <h3>Add Album</h3>
            <section class="albumForm">
                <label>Album Name:</label>
                <input type='text' id="albumName" class="albumName" PlaceHolder="Add a New Album" />
                <label>Record Label:</label>
                <input type='text' id="albumLabel" PlaceHolder="Add Record Label" />
                </br>
                <button class="albumAddButton" id="${artist.id}">Add Album</button>
                
            </section>
    
        `
    // }

}