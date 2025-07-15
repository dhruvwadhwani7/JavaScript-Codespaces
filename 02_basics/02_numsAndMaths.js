// creation of numbers
const score = 120
console.log(score)
const balance = new Number(12020)
console.log(balance)
const accountMoney = new Number(balance * 3.14)


//method 
console.log(balance.toString()) //converts to the string
console.log(typeof balance.toString()) // returns string

console.log(score.toExponential(2))  // output in exponentional scientific format 
console.log(typeof balance.toString())
console.log(balance.toString().length) //12020 has 5 length 

// decimal prinint gupto certain digits 
console.log(accountMoney.toFixed(30)) // prints 30 digits after the decimal 

const otherNumber = 12223163.1612
console.log(otherNumber.toPrecision(6)) 

// important 

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // US based commas return --- String 
console.log(hundreds.toLocaleString('en-IN')) // NOPT WORKING NOW BECAUSE LOCALE DATA IS NOT SYNCED 



//----------------MATHS-------------
console.log(Math)
console.log(Math.abs(-hundreds))
console.log(Math.round(4.2))
console.log(Math.ceil(4.2)) // will choose bigger number only no matter the the decimal 
console.log(Math.floor(4.9)) // lesser number printing 
console.log(Math.max(3,6))
console.log(Math.max(3,1,212,13,1,3))

const array = [1,2,3,4,45,5]
console.log(Math.max(...array)) // ... is a spread operator 


// random umber generation 
console.log(Math.random()) // will print numbers from 0-1 randomly in points 

console.log((Math.random()*10).toFixed(0))  // if we want to print from 1-10 not include 0 then
console.log((Math.floor((Math.random()*10) + 1) ))  // if we want to print from 1-10 not include 0 then
// to fixed returns strings 

const min = 10
const max = 20 

console.log((Math.floor(Math.random() * (max-min+1))) + min)
