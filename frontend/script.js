//console.log(a); // this way it is inicialized with undefinied, but we can reach it. like: var a = undefinied;
//console.log(b); // Cannot access 'b' before initialization (and the code is not starting)
//console.log(c); // Cannot access 'c' before initialization (and the code is not starting)

// console.log("Hello!");
// console.log('sima');
// console.log(`backtick`);

// console.log(2);
// console.log(typeof NaN);
// console.log(0/0);
// console.log(10/0);
// console.log(2.14);

// console.log(typeof NaN);
// console.log(typeof Infinity);

// console.log(true);
// console.log(typeof false);

// console.log(undefined);
// console.log(typeof undefined);
// console.log(null);
// console.log(typeof null);

/* console.log({
    "title" : "Start coding",
    "type" : "Solo",
    "difficulty" : 4.1,
    "usefullness" : 4.2,
    "enjoability" : 3.7,
    "materials" : 3.4,
    "tasks" : [
        {
            "title" : "Bank accounts",
            "description" : ""
        },
        {
            "title" : "100 doors",
            "description" : ""
        },
        {
            "title" : "Word filter",
            "description" : ""
        }
    ]
}); */

// hoisting
/* var a = "hello A";
let b = "hello B";
const c = "hello C";*/


// scopes
// function d(){
//     // if(1+1 === 2){
//     //     var a = "hello A";
//     //     let b = "hello B";
//     //     const c = "hello C";
//     // }
        
//     var a = "hello A";// this way the variables are declared before beginning of the function
//     let b = "hello B"; // this way the variables are declared at the beginning of the function
//     const c = "hello C"; // this way the variables are declared at the beginning of the function
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }

// d();

// let e = 1;
// console.log(e);
// let f = e;
// e = 2;
// console.log(e);
// e = e * 2;
// console.log(e);
// console.log(f);


// multiplyByTwo(1); //here we can access the funcion by no error
let e = 1;
function multiplyByTwo(myNumber){ // parameter scope is function or local
    console.log(myNumber);
    return myNumber * 2;
}

 let f = multiplyByTwo(1);
 console.log(f);
 console.log(multiplyByTwo(e));
//  console.log(num);




 //////////////////////////////////////////////////////////////////////

//  function functionRunner(myFunction){
//      console.log("functionrunner");
//      return myFunction(3);
//  }

//  functionRunner(multiplyByTwo);

// console.log(multiplyByTwo()); // returns NaN

// let object1 = {"key": "value"};
// let object2 = object1;
// object1.key = "value2";
// console.log(object1);
// console.log(object2);