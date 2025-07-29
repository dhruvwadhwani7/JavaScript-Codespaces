// let a = 10
// const b = 20 
// var c = 30 

var c = 300
// var can be redeclared and it is used as the global scope variable declaration

if(true) {
    let a = 10
    const b = 20
    // var c = 30 
    // c = 450
    // console.log(a)
}
// the if here is the BLOCK scope 
// the block scopr variables are not used outside 
// the exception is "var" -- not used mostly 



// the scope is defined in every lang as {} 
//the problem starts in here --- > do not confuse this {} with object decalration methods 

// console.log(a) // if the a is defined in the if block then this would not be printed 
//remember "LET"


// console.log(b) //if the a is defined in the if block then this would not be printed 
//remember "CONST"


console.log(c)


