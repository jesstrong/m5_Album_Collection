export default function Songs(songs) {
    return `
        <h1>Song List</h1>
            <ul>
                ${songs.map(song =>{
                    return `
                        <li>
                            Song Title: ${song.title}
                            Song Duration: ${song.duration}                            
                        </li>
                    `
                })}
            </ul>
    
        `; 
}