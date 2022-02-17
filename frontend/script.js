function loadEvent(){
    console.log("The page is loaded 2");
    let rootElement = document.getElementById("root");

    let card2 = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    };

    let anotherFavouriteMovie = {
        "title" : "The last scout boy",
        "year" : 1991,
        "rate" : 7.0
    };
    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }

    console.log(movies);
}

window.addEventListener(`load`, loadEvent);