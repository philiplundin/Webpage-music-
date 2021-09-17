
const elGenre = document.querySelector('#genre')
const elResult = document.querySelector('#result')
const elRefresh = document.querySelector('#refresh')

function userOption(event){

    let genre = elGenre.value;

    console.log(genre);

    if (genre == "pop") {
        localStorage.setItem('genre', 'pop');
    } else if (genre == "rock") {
        localStorage.setItem('genre', 'rock');
    } else if (genre == "hipHop") {
        localStorage.setItem('genre', 'hipHop');
    } else if (genre == "classic") {
        localStorage.setItem('genre', 'classic');
    }

    event.preventDefault();

    createLink(genre);
}

addEventListener("submit", userOption, false);


function createLink(genre){

    innerHTML = localStorage.getItem('genre');
    var link = document.createElement('a');

    if (genre == "pop") {
        link.textContent = 'Billie Eilish - Happier Than Ever'
        link.href = 'https://philun-iths.github.io/artist/billieEilish.html';
    } else if (genre == "rock") {
        link.textContent = 'Led Zeppelin - IV (Remaster)';
        link.href = 'https://philun-iths.github.io/artist/ledZeppelin.html';
    } else if (genre == "hipHop") {
        link.textContent = 'Drake - Views'
        link.href = 'https://philun-iths.github.io/artist/drake.html';
    } else if (genre == "electronic") {
        link.textContent = 'Moby - Play'
        link.href = 'https://philun-iths.github.io/artist/moby.html';
    }

    let text = 'Album suggestion for ' + genre;
    elResult.textContent = text;

    document.getElementById('linkResult').appendChild(link);

    let refresh = 'Refresh page or hit F5 to use this function again';
    elRefresh.textContent = refresh;
}




