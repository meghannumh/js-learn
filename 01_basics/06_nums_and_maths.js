const score = 400
console.log(score); //prints 400

const balance = new Number(100)
console.log(balance); //prints [number: 100]

console.log(balance.toString().length); //prints 3
console.log(balance.toFixed(2)); //prints 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //prints 124
console.log(otherNumber.toPrecision(4)); //prints 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //prints 10,00,000



// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math) //when you try in developers console it gives lots of methods
console.log(Math.abs(-4)) //prints 4
console.log(Math.round(4.6)) //prints 5
console.log(Math.ceil(4.6)) //prints 5
console.log(Math.floor(4.6)) //prints 4
console.log(Math.min(4, 3, 6, 8)) //prints 3
console.log(Math.max(4, 3, 6, 8)) //prints 8

console.log(Math.random());  //prints random value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)