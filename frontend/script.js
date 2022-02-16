// window.addEventListener(`load`, function  (){
//     console.log("The page is loaded 1");
// });

function loadEvent(){
    console.log("The page is loaded 2");
    for (const movie of movies) {
        document.getElementById("root").insertAdjacentHTML("beforeend",`
        <div class="card">
            <h1>${movie.title}</h1>
            <span>${movie.year}</span>
            <em>${movie.rate}</em>
        </div>
        `);


        // h1 title, year spanben, rate, nem lehet új div, de flex-szel kell 3 oszlopba rendezni
        // // this can be done, because we dont change the whole object
        // movie.title = "Titanic";

        // //this thows Assignment to constant variable at runtime
        // movie = "Titanic";
        // // console.log(movie.title);
    }

    console.log(movies);
}

window.addEventListener(`load`, loadEvent);