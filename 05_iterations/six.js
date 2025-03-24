const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currVal) =>{
    console.log(`acc: ${acc} ans currVal: ${currVal}`)
    // acc: 0 ans currVal: 1
    // acc: 1 ans currVal: 2
    // acc: 3 ans currVal: 3
    return acc+currVal
}, 0)

console.log(myTotal)
// 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalCost =shoppingCart.reduce((initial_val, item)=>initial_val+item.price, 0)

console.log(totalCost)
//22996