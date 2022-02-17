function loadEvent(){
    // console.log("The page is loaded 2");
    // let rootElement = document.getElementById("root");

    // let card2 = function (title, year, rate){
    //     return `
    //     <div class="card">
    //         <h2>${title}</h2>
    //         <div class="time">${year}</div>
    //         <div class="rate">${rate}</div>
    //     </div>
    //     `;
    // };

    // let anotherFavouriteMovie = {
    //     "title" : "The last scout boy",
    //     "year" : 1991,
    //     "rate" : 7.0
    // };
    // rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate));

    // for (const movieSend of movies) {
    //     rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    // }

    // console.log(movies);

    function myConstructorFunction(first, second){
        this.firstName = first;
        this.lastName = second;
        this.fullname = `${this.firstName} ${this.lastName}`;
        this.getFullName = function (){
            return `${this.firstName} ${this.lastName}`;
        };
        this.getDctoralName = function (){
            return `dr ${this.fullname} PhD`;
        };
    }

    let myHarry = new myConstructorFunction("Harry", "Potter");
    console.log(myHarry);
    console.log(myHarry.fullname);
    console.log(myHarry.getFullName());
    console.log(myHarry.getDctoralName());

    function person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    let johnDoe = new person("John", "Doe");
    console.log("My person's name is " + johnDoe.firstName+ " " + johnDoe.lastName);

    let personObject = {
        "firstName" : "John",
        "lastName" : "Potter",
        "fullName" : function () {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    console.log("My second person's name is " + personObject.fullName());

    let myObject = {"title": "Titanic"}
    function myObjectFunc(objectParam){
        // myObject.title = "Mouin Rouge"; //this will change my-Objecct's title, but the reference remain the same
        objectParam = {"title" : "Moulin Rouge"}; // this wont change myObject
        return objectParam;
    }
    let mySecondObject = myObjectFunc(myObject);
    console.log(myObject);
    console.log(mySecondObject);
}

window.addEventListener(`load`, loadEvent);