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
                        ${album.title}
                    </li>
                `
            }).join('')}
            </ol>
    
            <section class="albumForm">
                <label>Album Name:</label>
                <input type='text' id="albumName" class="albumName" PlaceHolder="Add a New Album" />
                </br>
                <button class="albumAddButton" id="${artist.id}">Add Album</button>
                
            </section>
    
        `
    // }

}