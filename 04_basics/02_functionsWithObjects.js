// function calculateCartTotal(num1){
//     return num1
// }
// console.log(calculateCartTotal(3))
// console.log(calculateCartTotal(3,4,5,6,7)) //in this what is happening 
//---> now the function accepts only and only 1 arguments hence it is printing the first one 

const { get } = require("mongoose")

//what if there are multiple items that you have to put it in the array for further calculations
//here comes the REST and The SPREAD operators 
// both are denoted by the ... but based upon the usages there names differ 

function calculateCartTotal(...num1){
    return num1
}

console.log(calculateCartTotal(200,2000,130,500))

//here the rest operator is doing a work of collecting open values into an array 

//the spread operator works just oppposite the array values are just opened in some values 

function calculatePrice(val1=300,val2=200,...num){
    return [val1,val2,num]
}
// console.log(calculatePrice(243,8920,300,2020)) //[243,8920,[300,2020]]
// console.log(calculatePrice(undefined,undefined,300,2020)) //[300,200,[300,2020]]
// console.log(calculatePrice(null,null,300,2020)) // [null,null,[300,2020]]

// using objects in Functions
const user = {
    username : "Dhruv",
    prices : 400 //if this get "prices" and not price then we have to do typecheck using if else  
}

function handleObject(anyObject){
    console.log(`the username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username : "Hitesh",
    price : 200
})


const myArray = [200,2012,120]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray)) //2012
console.log(returnSecondValue([200])) //undefined 