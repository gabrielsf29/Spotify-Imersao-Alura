const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi (searchTerm) {
    fetch('http://localhost:3000/artists?name_like=${searchTerm}')
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults (results) {
    hidePlaylists();
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });
    resultArtist.classList.remove("hidden");
  }

function hidePlaylists(){
    resultPlaylist.classList.add("hidden");
}

searchInput.addEventListener ("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ""){
        resultArtist.classList.add("hidden");
        resultPlaylist.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
})