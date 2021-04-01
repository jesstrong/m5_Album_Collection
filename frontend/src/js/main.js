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
            .then(data => appDiv.innerHTML = Songs(data))
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
            })
            .catch(err => console.log(err));
        });
    });
}

function artistAddButton() {
    const addArtistButton = document.querySelector(".artistAddButton");
    addArtistButton.addEventListener('click', function(){
        const newArtistName = this.parentElement.querySelector(".artistName").value;

        const requestBody = {
            Name: newArtistName,
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
            console.log(artist);
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
    console.log("add album");
    const addAlbumButton = document.querySelector(".albumAddButton");
    addAlbumButton.addEventListener('click', function(){
        const artistId = addAlbumButton.id;
        const newAlbumName = document.getElementById("albumName").value;
        console.log("button clicked");
        console.log("newAlbumName");
        const requestBody = {
            Title: newAlbumName,
            ArtistId: artistId
        }
        apiAction.postRequest(`https://localhost:44313/api/album`, requestBody, artist =>{
            console.log(artist);
            appDiv.innerHTML = Artist(artist);
            addAlbumArtist();
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
        console.log("button clicked");
        console.log("newSongName");
            const requestBody = {
                Title: newSongName,
                AlbumId: songId
            }
            apiAction.postRequest(`https://localhost:44313/api/song`, requestBody, song =>{
                console.log(song);
                appDiv.innerHTML = Album(song);
                addSongAlbum();
            })
        });
}

function deleteArtist(){
    const artistDelete = document.querySelectorAll(".artistDelBtn");
    artistDelete.forEach(element =>{
        element.addEventListener('click', function(){
            const artistId = element.id;
            apiAction.deleteRequest(`https://localhost:44313/api/artist`, artistId, data =>{
                if(data.indexOf(`successfully`) > -1){
                    const liItem = document.getElementById(artistId).parentElement;
                    liItem.remove();
                }
            });
        });
    })
}