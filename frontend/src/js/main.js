import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Albums from "./components/Albums";
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
            .then(data => appDiv.innerHTML = Albums(data))
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

        // let recordLabel = "";
        // let homeTown = "";

        const requestBody = {
            Name: newArtistName,
            // Age: 23,
            // RecordLabel: RecordLabel,
            // Hometown: Hometown
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
        } );
    });   
}   