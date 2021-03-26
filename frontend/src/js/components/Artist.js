export default function Artists(artists) {
    return `
        <h1>Artist List</h1>
            <ul>
                ${artists.map(artist =>{
                    return `
                        <li>
                            Artist Name: ${artist.name}
                            Artist Age: ${artist.age}
                            Record Label: ${artist.recordLabel}
                            Artist Hometown: ${artist.hometown}
                        </li>
                    `
                })}
            </ul>
    
        `; 
    // `
    //     <h1>Artist List</h1>
    //     <ul>
    //         <li>Artist one</li>
    //         <li>Artist Two</li>
    //         <li>Artist Three</li>        
    //     </ul>
    // `;
}