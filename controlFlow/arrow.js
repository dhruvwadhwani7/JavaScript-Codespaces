//there is another way to declare the functions
//--------ARROW FUNCTIONS------

// const chai = function () {
//     let username = "vedant"
//     console.log(this.username)
// }

const chai = () => {
    let username = "vedant"
    // console.log(this.username) //this will print undefined
    console.log(this)
}
// chai()
 
// this keyword in the arrow function can be utilized 
// when this is used in arrow function then the current context is just empty object {}

// in normal function console.log(this) will print long headed content with performances but in arrow function it will print empty object {}



// const addTwoNum = (num1,num2) => {
//     return num1 + num2
// }
//basic arrow function 

//IMPLICIT FUNCTIONS 
const addTwoNum1 = (num1,num2) => num1 + num2
//no need to write the return keyword   




//another way of using arrow function with ()
const addTwoNum = (num1,num2) => (num1 + num2)
console.log(addTwoNum(3,2))


// what if i have to return an object inside the arrow function
const newFunction = () => ({username:"hitesh"}) 
console.log(newFunction())
// if i have just wriiten like this 
//const newFunction = () => {username : "hitesh"}
//it would result in undefined becasue JS expects return as curly brackets are involved "{}"

// basic syntax is 
// () => {}
// () => ()