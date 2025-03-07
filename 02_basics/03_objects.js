//singleton => when declared as literals not singleton whereas declared as contructors thenn singleton
//object.creat e

// object literals

const jsUser = {
    name: "Meghana", //strored as key value here name is stored as string by default
    age: 10,
    "full name": "Meghana Hadimani",
    email: "meghannumh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email) // prints meghannumh@gmail.com
console.log(jsUser["email"]) //prints meghannumh@gmail.com
console.log(jsUser["full name"]) //prints Meghana Hadimani

jsUser.email = "meghana@chatgpt.com";
// Object.freeze(jsUser) // now you can't change the vlues of object
jsUser.email = "meghana@microsoft.com"; // doesnt change
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greeting) // prints [Function (anonymous)]

console.log(jsUser.greeting()) 
//prints Hello JS User
// //   undefined

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
// prints Hello JS User, Meghana
//        undefined

