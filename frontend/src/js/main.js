import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Albums from "./components/Album";
// import Artists from "./components/Artist";

export default() => {
    //document.getElementById("app").innerText = "Hello World!";
    headerSetup();
    footerSetup();
    navHome();
    //navArtist();
    navAlbum();
    //navSong();
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
            .then(data => console.log(data))
            .catch(err => console.log(err));

        appDiv.innerHTML = Albums(albums);   
 });
}

// function navArtist() {
//     const artistLink = document.querySelector(".nav_artist");
//     artistLink.addEventListener('click', function(){
        
//         fetch("https://")
//             .then(respone => respone.json())
//             .then(data => console.log(data))
//             .catch(err => console.log(err));

//         appDiv.innerHTML = Artists(artists);
//     })
