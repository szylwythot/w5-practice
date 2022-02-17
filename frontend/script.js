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

    let renderAllCardElements = function (incomingMovieArray){
        let renderedCardList = "";

        // //for cycle on a cards array
        // for (const cardElement of cardsArray) {
        //     //in every step push to the renderedCardList the given in the proper div card
        //     let floorRate = Math.floor(cardElement.rate);
        //     renderedCardList += card(cardElement.title, cardElement.year, floorRate);
        // }

        //for cycle on a cards array
        for (const incomingMovie of incomingMovieArray) {
            //in every step push to the renderedCardList the given in the proper div card
            let floorRate = Math.floor(incomingMovie.rate)
            renderedCardList += `
                <div class="card">
                    <h2 class="title">${incomingMovie.title}</h2>
                    <div class="year">${incomingMovie.year}</div>
                    <div class="year">${floorRate}</div>
                </div>
            `;
        }
        console.log(renderedCardList);

        //return the proper element renderedCardList
        return renderedCardList;
    }
    
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
    rootElement.insertAdjacentHTML(`beforeend`, renderAllCardElements(newGoodMoivies));

    // for (const movieSend of newGoodMoivies) {
    //     let floorRate = Math.floor(movieSend.rate);
    //     rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, floorRate));
    // }
    console.log(movies);
}

window.addEventListener(`load`, loadEvent);