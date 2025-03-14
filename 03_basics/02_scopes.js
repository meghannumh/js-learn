if(true){
    let a = 10
    const b = 20;
    var c = 30;
}

// console.log(a); //gives a not defined
// console.log(b); // gives b not defined
// console.log(c); // prints 30

var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20;
    var c = 30;

    // console.log("INNER: ", a) // prints 10 because of block scope
}

// console.log(a) // prints 300 becuase of global scope
// console.log(c) // prints 30


function one(){
    const username = "meghana";

    function two(){
        const website = "youtube";
        console.log(username); // prints meghana
    }
    // console.log(website) // gives error website not defined

    two();
}

one();

if(true){
    const username = "meghana";
    if(username === "meghana"){
        const website = " youtube";
        console.log(username + website);
    }
}



// ++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++


console.log(addone(5)) // prints 6

function addone(num){
    return num + 1;
}


console.log(addTwo(5)) // cannot access 'addTwo' before intialization

const addTwo = function(num){
    return num + 2;
}
