"use strict"; // treat all JS code as per new standards 

// alert(3+3) //generates an error 
// Javascript older engine was document type which was hidden inside the browser so the alert runs only there but theres a way to run alert in node aswell

//      CODE READEABLITY 
console.log("hello"); console.log(3+3) // will print the lines to console but not readable properly

// data types 
let names = "dhruv"
let age = 18
let isLoggedIn = true //boolean
let state = null // it is not undefined but null means empty 
let city; //here city is undefined beacuse no value is assigned to it and javascript deos not determine randomly it as null so it is "undefined"

console.table([names,age,isLoggedIn,state,city])


//PRIMITIVE DATA TYPES
/*number => 2 ^ 53 
bigInt ,
string ,
boolean 
null => standalone data type and value also 
undefined 
symbol --- uniqueness -- REACT */

console.log(typeof "dhruv"); //string
console.log(typeof age); //number 
console.log(typeof null); //object
console.log(typeof undefined); //undefined


//-------OBJECT -----
