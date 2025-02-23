// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSidTemp = null //(not zero it can be said as empty)
let userEmail; //undefined

const id = Symbol('123');
const anoutherId = Symbol('123 ');

console.log(id === anoutherId)

//Reference (Non primitive)


//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]    //Array

let myObj = {                                   //Object
    name: "Meghana",
    age: 25
} 

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myFunction))   //prints function

console.log(typeof(myObj))   //prints object

console.log(typeof(heros))   //prints object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive)  Heap(Non-Primitive) 

let youTube = "hiteshdotcom"
let name = youTube
name = "hitesh"

console.log(name)  // as in primitive which is stored in stack copies the element

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "meghannumh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)