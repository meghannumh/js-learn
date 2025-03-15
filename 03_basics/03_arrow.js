const user = {
    usesrname: "meghana",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.usesrname}, welcome to website`)
    }
}

user.welcomeMessage() // prints => meghana, welcome to website
user.usesrname = "sam";
user.welcomeMessage() // prints => sam, welcome to website