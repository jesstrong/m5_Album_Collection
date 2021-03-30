export default function Artist(artist) {
    return `
        <h1>{artist.name}</h1>
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
            <input type='text' class="albumName" PlaceHolder="Add a New Album" />
            <button class="albumAddButton" id="${artist.id}">Add Album</button>
        </section>

    `
}