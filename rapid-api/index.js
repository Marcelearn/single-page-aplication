let randomArtist = ["ninorota", "enniomorricone"];
async function getApi(query){
    console.log(query);
    query.forEach(async (e) => {
        try {
            const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${e}`,{
            "method":"GET", 
            "headers": {
                'X-RapidAPI-Key': '444873c061msh059d5294c75a105p1a1a72jsn914e2350ba3d',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }});
            if(response.status === 200) {
                const songs = await response.json()
                console.log (songs);
                fetchAlbums(songs.data);
               
            }else {
                throw new Error(`Could not found Artist: ${response.status}`);
            }
        }catch (error){
            return console.log(error);
        }  
    });
}
async function fetchAlbums(songs){
    songs.forEach(song => {
        let albumCard = document.querySelector('.container');
        albumCard.innerHTML += `<div>
        <img src="${song.album.cover_medium}"/> 
        <p>${song.title_short}</p>
        </div>`
    });
} 
getApi(randomArtist)
