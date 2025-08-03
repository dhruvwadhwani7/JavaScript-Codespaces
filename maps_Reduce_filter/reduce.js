const myArray = [1,2,3,4,5]

const i = 0
const sumofNums = myArray.reduce( (acc, val) => (acc + val),i) //this i is given so that accumulator gets its initial value
// console.log(sumofNums)


//here acc is the accumulator 
initialValue = 0
const myTotal = myArray.reduce( function (accumulator,CurrentValue) {
    console.log(`the accumulator is ${accumulator} and current value is now ${CurrentValue}`)
    return accumulator + CurrentValue
},initialValue)
// console.log(myTotal)



//REAL LIFE EXAMPLE 
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

const totalPrice = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(totalPrice)
