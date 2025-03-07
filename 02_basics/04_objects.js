// const tinderUser = new Object() // prints {} => is a singleton object
const tinderUser = {} // prints {} => empty object non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser) // printss { id: '123abc', name: 'Sammy', isLoggedIn: false }

const  regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Meghana",
            lastName: "Hadimani"
        }
    }
}

// console.log(regularUser.fullName) // { userFullName: { firstName: 'Meghana', lastName: 'Hadimani' } }
// console.log(regularUser.fullName.userFullName) // { firstName: 'Meghana', lastName: 'Hadimani' }

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3) // prints { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email:'m@gmail.com'
    },
    {
        id: 1,
        email:'m@gmail.com'
    },
    {
        id: 1,
        email:'m@gmail.com'
    }
]

console.log(users[1].email) //m@gmail.com

console.log(tinderUser)
console.log(Object.keys(tinderUser))// [ 'id', 'name', 'isLoggedIn' ] => array type
console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ] => array type
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] => array type

const course = {
    courseName: "js in hindi",
    price: "999",
    courseinstructor: "hitesh" 
}

//course.courseinstructor
const {courseinstructor} = course;
console.log(courseinstructor) //prints hitesh //destructuring object
const {courseinstructor: instructor} = course;
console.log(instructor); //prints hitesh //destructuring object

// {
//     "name": "hitessh",
//     "courseName": "js in hindi",    //json
//     "price":"99"
// }