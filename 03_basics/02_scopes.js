if(true){
    let a = 10
    const b = 20;
    var c = 30;
}

// console.log(a); //gives a not defined
// console.log(b); // gives b not defined
console.log(c); // prints 30

var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20;
    var c = 30;

    console.log("INNER: ", a) // prints 10 because of block scope
}

console.log(a) // prints 300 becuase of global scope
console.log(c) // prints 30
