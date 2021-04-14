export default function Songs(songs) {
    return `
        <h1>Song List</h1>
            <ul>
                ${songs.map(song =>{
                    return `
                        <li>
                            <h4>Song Title: ${song.title}</h4></br>
                            Song Duration: ${song.duration}</br>
                            <button class="songDelBtn" id="${song.id}">Delete</button>
                        </li>
                    `
                }).join('')}
            </ul>
    
        `; 
}