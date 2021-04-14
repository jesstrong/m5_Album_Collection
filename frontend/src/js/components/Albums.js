export default function Albums(albums) {
    return `
             <h1>Album List</h1>
                <ul>
                     ${albums.map(album =>{
                         return `
                            <div class="albums" id="${album.id}">
                                <h3> Album Title: ${album.title} </h3>
                                 Record Label: ${album.recordLabel} 
                                 </br>
                                 <button class="albumDelBtn" id="${album.id}">Delete</button>
                            </div>
                         `
                     }).join('')}
                </ul>
    `;
}