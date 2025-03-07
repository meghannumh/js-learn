// arrays

const arr = [1, 2, 3, "meghana", true]; // can contain elements of any type, they are resizable

const myArr = [0, 1, 2, 3, 4, 5] 
const myHeros = ["shaktiMan", "nagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]) //prints 1

// //Array Methods

// myArr.push(6)
// console.log(myArr) // prints [0, 1, 2, 3, 4, 5, 6]

// myArr.pop();
// console.log(myArr) //prints [ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9)
// console.log(myArr) //prints [ 9, 0, 1, 2, 3, 4, 5 ]

// myArr.shift()
// console.log(myArr) // prints [ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9)) //prints falsse

// console.log(myArr.indexOf(9)) //prints -1
// console.log(myArr.indexOf(3)) //prints 3

// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr); A  [ 0, 1, 2, 3, 4, 5 ]
//                             [ 1, 2 ]
//                         B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3); // insludes 
console.log(myn2); //prints [ 1, 2, 3 ]
console.log(myArr) //also manipulates the original value and prints [ 0, 4, 5 ]
