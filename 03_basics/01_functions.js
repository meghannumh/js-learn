function sayMyName(){
    console.log("M");
    console.log("E");
    console.log("G");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1, number2){
    return number1+number2
}

const result = addTwoNumbers(3, 4)
console.log(result) // prints undefined

function loginUserMessage(userName = "sam"){
    if(userName === undefined){
        console.log("please enter a user name")
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) //prints [400, 2000] as 200,, 400 is taken by val1 & val2

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is hitesh and price is 199
}

handleObject(user) //prints 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //prints 400
