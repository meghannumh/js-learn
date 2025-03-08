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
