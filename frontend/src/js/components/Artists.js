export default function Artists(artists) {
    return `
        <h1>Artist List</h1>
            <ul>
                ${artists.map(artist =>{
                    return `
                        <li>
                            <div class="content_artist">
                                <h4 class="artist" id="${artist.id}"> ${artist.name}</h4>
                                Artist Age: ${artist.age}</br>
                                Record Label: ${artist.recordLabel}</br>
                                Artist Hometown: ${artist.hometown}</br>
                                <br>
                                <button class="artistDelBtn" id="${artist.id}">Delete</button>
                            </div>
                        </li>
                    `
                }).join('')}
            </ul>

        <section class="artist_addArtist">
            <label> Artist Name: </label>  
            <input type='text' class="artistName" PlaceHolder="Enter Artist Name" />
            <label> Age: </label>  
            <input type='text' class="artistAge" PlaceHolder="Enter Age" />
            <label> Record Label: </label>  
            <input type='text' class="artistRecordLabel" PlaceHolder="Enter Record Label" />
            <label> Hometown: </label>  
            <input type='text' class="artistHometown" PlaceHolder="Enter Hometown" />
            <button class="artistAddButton">Add Artist</button>
        </section>
    
    `;
}