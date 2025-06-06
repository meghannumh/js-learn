const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros) // prints [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] => so here array is insert as an individual element
// console.log(marvel_heros[3][1]); //prints flash

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros) // prints [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // ... => is a spread operator
// console.log(all_new_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array) //prints [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Meghana")) //prints false
console.log(Array.from("Meghana")) //prints ['M', 'e', 'g', 'h', 'a', 'n', 'a' ]
console.log(Array.from({name: "Meghana"})) //interesting prints []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]