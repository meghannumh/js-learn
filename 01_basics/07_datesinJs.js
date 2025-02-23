// Javascript date objects represent a single moment in time in a platform indepedent format.
//The moment or arbitrary date is January 1, 1970, UTC(the epoch)

let myDate = new Date();
console.log(myDate) //prints 2025-02-23T17:25:10.728Z
console.log(myDate.toString()) //prints Sun Feb 23 2025 17:25:59 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()) //prints Sun Feb 23 2025\
console.log(myDate.toISOString()) //prints 2025-02-23T17:28:23.627Z
console.log(myDate.toJSON()) //prints 2025-02-23T17:28:23.627Z
console.log(myDate.toLocaleDateString()) //prints 2/23/2025
console.log(myDate.toLocaleString()) //prints 2/23/2025, 5:29:20 PM

console.log(typeof(myDate)) //prints object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()) // prints Mon Jan 23 2023

let myCreatedDate = new Date("12-01-2024")
console.log(myCreatedDate) //prints 2024-12-01T00:00:00.000Z

let myTimeStamp = Date.now()
console.log(myTimeStamp) // prints 1740332145961 -> gives value in millisecond
console.log(myCreatedDate.getTime()); // prints 1733011200000 -> gives value in millisecond

console.log(Math.floor(Date.now()/1000)) // prints 1740332343 -> in seconds


let newDate = new Date()
console.log(newDate); // 2025-02-23T17:41:40.128Z
console.log(newDate.getMonth()); //prints 1 as months starts from 0 so for feb it is printing feb

newDate.toLocaleString('default', {
    weekday: 'long' // press ctrl + 'space'
})

console.log(newDate)
