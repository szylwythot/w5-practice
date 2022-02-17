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
        let renderedCardList = `<div class="cards">`;

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
        renderedCardList += `</div>`
        console.log(renderedCardList);

        //return the proper element renderedCardList
        return renderedCardList;
    }

    let newGoodMoivies = [];
    for (const movieSend of movies) {

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMoivies.push(movieSend);
        }

    }

    newGoodMoivies.sort(function(a, b){return a.year -b.year});
    rootElement.insertAdjacentHTML(`beforeend`, renderAllCardElements(newGoodMoivies));
}

window.addEventListener(`load`, loadEvent);