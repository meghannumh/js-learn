const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element)
}
// 1
// 2
// 3
// 4
// 5

const greeting = "Welcome to youtube"

for (const element of greeting) {
    console.log(element)
}

// W
// e
// l
// c
// o
// m
// e
 
// t
// o
 
// y
// o
// u
// t
// u
// b
// e

//maps
 
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for(const [keyMap, value] of map){ //destructure
    console.log(keyMap, ":-", value)
}
// IN :- India
// USA :- United States of America
// Fr :- France

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for(const [key, value] of myObject){
    console.log(key, ":-", value)
}
// myObject is not iterable