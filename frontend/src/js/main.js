import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Artist from "./components/Artist";

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

function navArtist() {
    const artistLink = document.querySelector(".nav_artist");
    artistLink.addEventListener('click', function(){
        appDiv.innerHTML = Artist();
    })
}
