function loadEvent(){
    console.log("The page is loaded 2");
    let rootElement = document.getElementById("root")
    
    let card = function (movieRecieved){
        return `
        <div class="card">
            <h2>${movieRecieved.title}</h2>
            <div class="time">${movieRecieved.year}</div>
            <div class="rate">${movieRecieved.rate}</div>
        </div>
        `;
    };

    
    rootElement.insertAdjacentHTML("beforeend", card({
        "title": "Moulin Rouge",
        "year" : 2001,
        "rate" : 9.9
    }));

    let actuallyFavouriteMovie = {
        "title": "Eternal sunshine of a spotless mind",
        "year" : 2004,
        "rate" : 9.8
    };

    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));


    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }

    console.log(movies);
}

window.addEventListener(`load`, loadEvent);