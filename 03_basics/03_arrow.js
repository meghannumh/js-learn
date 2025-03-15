const user = {
    usesrname: "meghana",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.usesrname}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage() // prints => meghana, welcome to website
// user.usesrname = "sam";
// user.welcomeMessage() // prints => sam, welcome to website

// console.log(this) //prints {}


// function chai(){
//     let usesrname = "meghana"
//     console.log(this.usesrname); //  prints undefined
// }

// chai() //prints many values

// const chai = function () {
//     let usesrname = "meghana"
//     console.log(this.usesrname)
// }

// chai()


const chai = () => {
    let usesrname = "meghana"
    console.log(this.usesrname) //in arrow fucntin we do not use this whereas in regular function we ca=n
}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4)) //prints 7

// const addTwo = (num1, num2) =>  num1 + num2; //implicit return

// console.log(addTwo(3, 4)) //prints  7
const addTwo = (num1, num2) =>  (num1 + num2); //implicit return

console.log(addTwo(3, 4)) //prints  7



