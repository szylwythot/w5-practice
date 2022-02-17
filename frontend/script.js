function loadEvent(){

    let rootElement = document.getElementById("root");

    let card = function (title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    };

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, movieSend.rate));
    }

    console.log(movies);
}

window.addEventListener(`load`, loadEvent);