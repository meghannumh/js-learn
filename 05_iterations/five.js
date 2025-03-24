const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums)
// [
//     11, 12, 13, 14,
//     15, 16, 17, 18
// ]

// const newwNums = myNumbers.map((num) => { return num + 10}) //if curly braces used then it isn't implicit anymore you have to use return as a new scop starts
// console.log(newwNums)
// [
//     11, 12, 13, 14,
//     15, 16, 17, 18
// ]

// const newNum = myNumbers.map((num) => num * 10).map((num) => num + 1)  //chaining , suppose for 1 => 1*10+1 = 11
// console.log(newNum)     
// [
//     11, 21, 31, 41,     
//     51, 61, 71, 81
// ]

const newNum = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >40)
console.log(newNum)
// [ 41, 51, 61, 71, 81 ]