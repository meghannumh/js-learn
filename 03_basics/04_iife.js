// Immediately Innvoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();       
                   //prints DB CONNECTED


//()() //first parenthesis here is function definition and second parenthesis is execution is how funcitn is invoked 

(() => {
    console.log(`DB CONNECTED TWO`);
}) (); 

// prints 
// DB CONNECTED
// DB CONNECTED TWO

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("meghana"); 

// prints
// DB CONNECTED
// DB CONNECTED TWO
// DB CONNECTED TWO meghana

(function chai(){
    //named IIFE 
    console.log(`DB Connected`)
})();

//if two IIFE is written then add semicolon at end