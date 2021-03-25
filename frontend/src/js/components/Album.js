 export default function Albums(albums) {
    return `
             <h1>Album List</h1>
                <ul>
                     ${albums.map(album =>{
                         return `
                             <li>
                                 Artist Title: ${artist.title}
                                 Record Label: ${artist.recordLabel}
                             </li>
                         `
                     })}
                 </ul>
    `;

    // `
    //      <h1>Album List</h1>
    //      <ul>
    //          <li>Album One</li>
    //          <li>Album Two</li>
    //         <li>Album Three</li>        
    //     </ul>
    // `;
 }