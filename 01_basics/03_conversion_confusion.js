let score = null
console.log(typeof score); //string
console.log(typeof(score)); // calling a method 


let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
// now when the number is not fully number means it contains strings or any other charatcers as well 
// the type will be changed to number but the value of that varibale is NaN
// NaN is a Not a Number 
console.log(valueInNumber); 

// when the score is null, then the value is printed 0

// "33" , string => 33 
// "33abc" , string => NaN , number 
// "Dhruv" , string=> NaN , number 
// null, object  => 0 , number
// no value, undefined => undefined, undefined
// true , boolean => 1 , number 
// false, boolean => 0 , number

let isLoggedIn = "31na"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) 

// input ---- > output 
// 1 => true 
// 0 => false 
// "" => false  // empty string without spaces NO spaces  
// "   " => true  // with spaces  spaces  
// "dhruv" => true
// null => false 
// undefined => false
// true => true
// false => false

let someNumber = "33"
let stringNumber = String(someNumber) 
console.log(typeof stringNumber); //string
console.log(stringNumber); 

// input ---- > output 
// 33 => 33
// "33" => 33
// true => true
// false => false 
// null => null
// undefined => undefined 

