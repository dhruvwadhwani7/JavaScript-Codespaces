//IIFE FUNCTIONS
// Immediately invoked function expressions 

// IIFE
(function chai(){
    console.log("DB CONNECTED")
})();

(function chaiTwo(){
    //named IIFE 
    console.log("DB CONNECTED TWO")
})();

// (chaiThree = () => {
//     console.log("DB CONNECTED THREE")
// })()

((name) => {
    //unamed IIFE 
    console.log(`DB CONNECTED THREE ${name}`)
})("Dhruv")

//2 IIFE's can be wriiten by using a semicolon 

// when you write the two function IIFE to run at the same time 
// it will not run because the IIFE function does not where to end the contexts of the code or the function 
// hence a semicoln is used ; to end the things 

// ()()

// now the first parenthisis is the definiction of function and second one is the calling of the function means execution
//no need to write the chai() for calling it is immediately called 


// const chai = () => {
//     console.log("DB CONNECTED")
// }
// chai()

// (const chai = () => {
//     console.log("DB CONNECTED")
// })()