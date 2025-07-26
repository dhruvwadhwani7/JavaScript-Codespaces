// function is package of a code --- in simpler terms 
// you can take this package as a whole and use it in other or print 
// it is taken in a manner of created copies (MULTIPLE)

// console.log("Dhruv")
// console.log("Wadhwani")

// functions is used for these multiple usage codes or lines in your whole code
function sayMyName() {
    console.log("Dhruv")
    console.log("Wadhwani")
}
// sayMyName // this is function refrence

// console.log(sayMyName) // printing the refrence 

// console.log(sayMyName()) //calling the function inside the console.log()
// the output 
// Dhruv
// Wadhwani
// undefined

// sayMyName() //this is function  calling


//ADDING TWO NUMBERS 
function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}
//these num1 and num2 are called paramters  --- > When define a function num1 and num2 are called the paramters 

// while calling the fcuntion you have to give arguments --- >ARGUMENTS 
// addTwoNumbers() // there is no argument -----> NaN
// addTwoNumbers(3,4) //7
// addTwoNumbers(3,"a") //3a
// addTwoNumbers("b","a") //ba
// addTwoNumbers("b",null) //bnull
// addTwoNumbers(null,null) //0
// addTwoNumbers(3,null) //3  


// major question
// const result = addTwoNumbers(3,5) 
// console.log(result) // this will print undefined because the function addTwoNumbers is not returning anything


function addThreeNumbers(number1,number2,number3){
    let result = number1 + number2 
    return result
    console.log("hello")// this console print will not work because after returning the function will not do anything 
}
// console.log(addThreeNumbers(3,5)) 

// in the ThreeSum_results variable a returned value by the function is stored  hence it returns and the console.log() valuer is also inside the funtion hence prinitng that as well 


function userLoggedInMessage(username = "TEST USER"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in , Hello`
}
// console.log(userLoggedInMessage("Dhruv"))
console.log(userLoggedInMessage()) //if no value is passed ???
// it will take undefined because no arguments is passed 

// const name = "Dhruv"  //---> TRUE 
// console.log(!name)  //meaning !TRUE --> FALSE 

/*This checks if username is falsy. In JavaScript, these are all falsy values:
undefined
null
false
0
'' (empty string)
NaN
So if username is missing, empty, or invalid, the condition will be true.
this is equivalent to username === undefined */

//the test user is passed as a default value in the function if now args is passed then this will be printed , if passed then overwritted 