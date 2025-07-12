/******PRIMITIVE DATA TYPES  -- 7 TYPES*/

// these are call by value data types   , they are copies measn the original refrence is nt givn to you but a copy so thec hnages mad eby you are in a copy 

// String : Number : BigInt : Boolean : Null : Undefined :  Symbol  



//Symbol 
/* const id = Symbol('123')
const anotherId = Symbol('123')
// these 2 are not equal because of the symbol keyword usage they are assigned diffrent memory 

console.log(id == anotherId) //false 
//for symbols there are no conversions

console.log(id === anotherId) //false

const bigNumber = 129131932103913010939130130013021329132n
console.log(bigNumber)
console.log(typeof bigNumber) //bigint */



/******    REFERENCE TYPES -----NON PRIMITIVE DATA TYPES  -- 7 TYPES*/
// those dta types which refrences can be directly allocated to you 

// Array : Object : Function

const heros = ["thor", "flash","batman"]

let myDetails = {
    name: "Dhruv",
    age : 20,
    city : "Udaipur" 
}
console.table([myDetails])
const myFunction = function(){
    console.log("Hello World")
}
myFunction()

const nullValue = null
console.log(typeof nullValue) //object 

console.log(typeof myFunction) //function  ---> it is an  function object   