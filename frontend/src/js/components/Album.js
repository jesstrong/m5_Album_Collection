export default function Album(album) {
    if(album.songs == null){
        album.songs = [];
    }
    
    return `
             <h1>${album.title}</h1>
                <ul>
                     ${album.songs.map(song =>{
                         return `
                             <li>
                                 Song Title: ${song.title}
                             </li>
                         `
                     }).join('')}
                 </ul>

                <section class="songForm">
                    <label>Song Name:</label>
                    <input type='text' id="songName" class="songName" PlaceHolder="Enter Song Name" />
                    <label>Duration</label>
                    <input type='text' id="songDuration" PlaceHolder="Enter Song Duration" />
                    </br>
                    <button class="songAddButton" id="${album.id}">Add Song</button>
                </section>
    `;
}