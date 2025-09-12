const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor)
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

console.log(Math.PI)
Math.PI = 5 //cannot change
console.log(Math.PI)


// const myNewObj = Object.create(null)

const chai = {
    name : "ginger",
    price : 250,
    isAvalaible : true,
    orderChai : function(){
        console.log("chai nhi bani")
    }

}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
/*
{
  value: 'ginger',
  writable: true,
  enumerable: true,
  configurable: true
}*/ 
//can you change the writable to false?

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable :false //whther it will loop iterate or not
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
/*
{
  value: 'ginger',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

chai.name = "masala"
console.log(chai)
/* name: 'ginger', price: 250, isAvalaible: true }*/
// you will not get name here if enumerable is false 

console.log(chai.name)
// it will remain ginger

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value} `)
    }
}


/*///------case 
Object.defineProperty(chai,"name",{
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))
console.log(chai)
/*{ price: 250, isAvalaible: true }*/ 
//you get no name as enumerable : false or you cannot loop anymore on this 
//console.log(chai.name) //remains ginger only 
