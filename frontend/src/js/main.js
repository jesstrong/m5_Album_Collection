import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Album from "./components/Album"
import Artists from "./components/Artists";
import Songs from "./components/Songs";
import Artist from "./components/Artist";
import apiAction from "./api/api-actions";

export default() => {
    //document.getElementById("app").innerText = "Hello World!";
    headerSetup();
    footerSetup();
    navHome();
    navArtist();
    navAlbum();
    navSong();
}

const appDiv = document.getElementById("app");

function headerSetup() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
}

function footerSetup() {
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeLink = document.querySelector(".nav_home");
    homeLink.addEventListener('click', function(){
        appDiv.innerHTML = Home();
    });
}

function navAlbum() {
    const albumLink = document.querySelector(".nav_album");
    albumLink.addEventListener('click', function(){

        fetch("https://localhost:44313/api/album")
            .then(respone => respone.json())
            .then(data => {
                appDiv.innerHTML = Albums(data);
                albumContentElement();
                deleteAlbum();
            })
            .catch(err => console.log(err)); 
    });
}

function navArtist() {
    const artistLink = document.querySelector(".nav_artist");
    artistLink.addEventListener('click', function(){

        fetch("https://localhost:44313/api/artist")
            .then(respone => respone.json())
            .then(data => {
                appDiv.innerHTML = Artists(data);
                artistAddButton();
                contentArtistButton();
                deleteArtist();
            }) 
            .catch(err => console.log(err));      
    });
}
function navSong() {
    const songLink = document.querySelector(".nav_song");
    songLink.addEventListener('click', function(){

        fetch("https://localhost:44313/api/song")
            .then(respone => respone.json())
            .then(data => {
                appDiv.innerHTML = Songs(data);
                deleteSong();
            })             
            .catch(err => console.log(err));
 });
}

function contentArtistButton(){
    const contentArtistElements = document.querySelectorAll(".artist");
    contentArtistElements.forEach(element => {
        element.addEventListener('click', function(){
            const artistId = element.id;
            fetch(`https://localhost:44313/api/artist/${artistId}`)
            .then(response => response.json())
            .then(artist => {
                appDiv.innerHTML = Artist(artist);
               contentAlbumButton();
               addAlbumArtist();
               editArtistButton();
            })
            .catch(err => console.log(err));
        });
    });
}

function artistAddButton() {
    const addArtistButton = document.querySelector(".artistAddButton");
    addArtistButton.addEventListener('click', function(){
        const newArtistName = this.parentElement.querySelector(".artistName").value;
        const newArtistAge = this.parentElement.querySelector(".artistAge").value;
        const newArtistLabel = this.parentElement.querySelector(".artistRecordLabel").value;
        const newArtistHometown = this.parentElement.querySelector(".artistHometown").value;

        const requestBody = {
            Name: newArtistName,
            Age: newArtistAge,
            RecordLabel: newArtistLabel,
            Hometown: newArtistHometown
            
        }

        fetch('https://localhost:44313/api/artist', {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(artist => {
            appDiv.innerHTML = Artist(artist);
            addAlbumArtist();

        })
        .catch(err => console.log(err));

    });
}

function contentAlbumButton(){
    const contentAlbumElements = document.querySelectorAll(".artist_addAlbum");
    contentAlbumElements.forEach(element => {
        element.addEventListener('click', function(){
            const albumId = element.id;
            fetch(`https://localhost:44313/api/artist/${albumId}`)
            .then(response => response.json())
            .then(album => {
                appDiv.innerHTML = Artist(album);
               addAlbumArtist();
               addSongAlbum();
            })
            .catch(err => console.log(err));
        });
    });
}

function addAlbumArtist(){
    const addAlbumButton = document.querySelector(".albumAddButton");
    addAlbumButton.addEventListener('click', function(){
        const artistId = addAlbumButton.id;
        const newAlbumName = document.getElementById("albumName").value;
        const newAlbumLabel = document.getElementById("albumLabel").value;

        const requestBody = {
            Title: newAlbumName,
            ArtistId: artistId,
            RecordLabel: newAlbumLabel
        }
        apiAction.postRequest(`https://localhost:44313/api/album`, requestBody, album =>{
            appDiv.innerHTML = Album(album);
            addSongAlbum();
        });
    });   
}   

function albumContentElement(){
    const albumContents = document.querySelectorAll(".albums");
    albumContents.forEach(element => {
        element.addEventListener('click', function(){
            const albumId = element.id;
            fetch(`https://localhost:44313/api/album/${albumId}`)
            .then(response => response.json())
            .then(album => {
                appDiv.innerHTML = Album(album);
                addSongAlbum();
                editAlbumButton();
            })
            .catch(err => console.log(err));
        });
    });
}

function addSongAlbum(){
    const addSongButton = document.querySelector(".songAddButton");
    addSongButton.addEventListener('click', function(){
        const songId = addSongButton.id;
        const newSongName = document.getElementById("songName").value;
        const newSongDuration = document.getElementById("songDuration").value;

            const requestBody = {
                Title: newSongName,
                AlbumId: songId,
                Duration: newSongDuration
            }
            apiAction.postRequest(`https://localhost:44313/api/song`, requestBody, song =>{
                console.log(song);
                appDiv.innerHTML = Songs(song);
               
            })
        });
}

function editArtistButton(){
    const editArtistBtn = document.getElementById("btnEditArtist");
    editArtistBtn.addEventListener('click', function(){
        const artistId = document.getElementById('artistId').value;
        const artistName = document.getElementById('artistName').value;
        const artistAge = document.getElementById('artistAge').value;
        const artistHometown = document.getElementById('artistHometown').value;
        const artistRecordLabel = document.getElementById('artistRecordLabel').value;

        const requestBody = {
            Id: artistId,
            Name: artistName,
            Age: artistAge,
            Hometown: artistHometown,
            RecordLabel: artistRecordLabel
        }

        apiAction.putRequest("https://localhost:44313/api/artist/", artistId, requestBody, artist =>{
            appDiv.innerHTML = Artist(artist);
        })
    });
}
function editAlbumButton(){
    const editAlbumBtn = document.getElementById("btnEditAlbum");
    editAlbumBtn.addEventListener('click', function(){
        const albumId = document.getElementById('albumId').value;
        const artistId = document.getElementById('albumArtistId').value;
        const albumRecordLabel = document.getElementById('albumRecordLabel').value;
        const albumTitle = document.getElementById('albumTitle').value;

        const requestBody = {
            Id: albumId,
            Title: albumTitle,
            ArtistId: artistId,
            RecordLabel: albumRecordLabel
        }

        apiAction.putRequest("https://localhost:44313/api/album/", albumId, requestBody, album =>{
            appDiv.innerHTML = Album(album);
        })
    });
}


function deleteArtist(){
    const artistDelete = document.querySelectorAll(".artistDelBtn");
    artistDelete.forEach(element =>{
        element.addEventListener('click', function(){
            const artistId = element.id;
            apiAction.deleteRequest(`https://localhost:44313/api/artist/`, artistId, data =>{
                if(data.indexOf(`successfully`) > -1){
                    const liItem = document.getElementById(artistId).parentElement;
                    liItem.remove();
                }
            });
        });
    })
}

function deleteAlbum(){
    const albumDelete = document.querySelectorAll(".albumDelBtn");
    albumDelete.forEach(element =>{
        element.addEventListener('click', function(){
            const albumId = element.id;
            apiAction.deleteRequest(`https://localhost:44313/api/album/`, albumId, data =>{
                if(data.indexOf(`successfully`) > -1){
                    const liItem = document.getElementById(albumId).parentElement;
                    liItem.remove();
                }
            });
        });
    })
}

function deleteSong(){
    const songDelete = document.querySelectorAll(".songDelBtn");
    songDelete.forEach(element =>{
        element.addEventListener('click', function(){
            const songId = element.id;
            apiAction.deleteRequest(`https://localhost:44313/api/song/`, songId, data =>{
                if(data.indexOf(`successfully`) > -1){
                    const liItem = document.getElementById(songId).parentElement;
                    liItem.remove();
                }
            });
        });
    })
}

// function editArtistContent(){
//     const editArtistElements =
// }