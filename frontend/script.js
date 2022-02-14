console.log(a); // this way it is inicialized with undefinied, but we can reach it. like: var a = undefinied;
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
var a = "hello A";
let b = "hello B";
const c = "hello C";

console.log(b);
console.log(c);