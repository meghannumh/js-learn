const name = "meghana"
const repoCount = 50

console.log(name + repoCount + "Value")

//string interpolation

console.log(`Hello my bame is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Mini Miltia")  //object

console.log(gameName[3]);  //prints i
console.log(gameName.__proto__) //prints {}

console.log(gameName.length)
console.log(gameName.toUpperCase())  //prints MINI MILTIA
console.log(gameName.charAt(2)) //prints n
console.log(gameName.indexOf('i')) // prints 1

const newString = gameName.substring(5, 9); 
console.log(newString) // prints Milt

const anotherString = gameName.slice(-8, 4);
console.log(anotherString) // prints Milt


const newStringOne = "    meghana     "
console.log(newStringOne)
console.log(newStringOne.trim()) //prints meghana
console.log(newStringOne)

const url = "https://meghana.com/meghana%20hadimani"
console.log(url.replace('%20', '-')) //prints https://meghana.com/meghana-hadimani

console.log(url.includes('meghana')) //prints true

console.log(gameName.split(' ')) //prints [ 'Mini', 'Miltia' ]