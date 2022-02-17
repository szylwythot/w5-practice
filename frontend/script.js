function loadEvent() {

    let rootElement = document.getElementById("root");

    let card = function (title, year, rate) {
        return `
            <div class="card">
                <h2>${title}</h2>
                <div class="time">${year}</div>
                <div class="rate">${rate}</div>
            </div>
            `;
    };
    
    // movies.sort(function(movie1, movie2){return movie1.year - movie2.year});

    let newGoodMoivies = [];
    for (const movieSend of movies) {
        // let floorRate = Math.floor(movieSend.rate);

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMoivies.push(movieSend);
            // rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, floorRate));
        }

    }
    
    newGoodMoivies.sort(function(a, b){return a.year -b.year});
    for (const movieSend of newGoodMoivies) {
        let floorRate = Math.floor(movieSend.rate);
        rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, floorRate));
    }
    console.log(movies);
}

window.addEventListener(`load`, loadEvent);