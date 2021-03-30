import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Songs from "./components/Songs";

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
                appDiv.innerHTML = Artists(data)
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
    const contentArtistElements = document.querySelectorAll(".content_artist");
    contentArtistElements.forEach(element => {
        element.addEventListener('click', function(){
            const artistId = element.id;
            fetch(`https://localhost:44313/api/artist/${artistId}`)
            .then(response => respone.json())
            .then(artist => console.log(artist))
        })
    })
}