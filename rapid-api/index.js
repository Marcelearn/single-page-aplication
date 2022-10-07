let randomArtist = ['eminem', 'queen', 'thedoors']
async function getApi(query){
    console.log(query);
    query.forEach(async (e) => {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${e}`,{
            "method":"GET", 
                "headers": {
                'X-RapidAPI-Key': '444873c061msh059d5294c75a105p1a1a72jsn914e2350ba3d',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });
        const songs = await response.json()
        console.log (songs);
        fetchAlbums(songs.data);    
    });

}
async function fetchAlbums(songs){
    songs.forEach(song => {
        let albumCard = document.querySelector('.container');
        albumCard.innerHTML += `<div>
        <img src="${song.album.cover_medium}"/> 
        <p>${song.title}</p>
        </div>`

    });
} 
getApi(randomArtist)
