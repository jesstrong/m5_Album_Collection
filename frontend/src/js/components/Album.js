 export default function Albums(albums) {
    return `
             <h1>Album List</h1>
                <ul>
                     ${albums.map(album =>{
                         return `
                             <li>
                                 Album Title: ${album.title}
                                 Record Label: ${album.recordLabel}
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