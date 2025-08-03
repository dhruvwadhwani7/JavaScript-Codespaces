// const isUserLoggedIn = true
// const temperature = 41 

//CONDITIONAL CHECKING ----> IF ELSE 
// if (temperature <= 50) {
//     console.log("Low temperature")
// }
// else {   
//     console.log("high temperature")
// }

// console.log("temperature Notation given") //100% executes 



//---------------Scopes of the "var" varibales decalration and others 
// const score = 200
// const power = "invisible"
// if (score > 100) {
//     const power = "fly" //if i declare var power = "fly" then it would be global scopes 
//     // console.log(this)
//     console.log(`the user power if the score is above 100 : ${power}`)
// }
// console.log(`other users power are just ${power}`)




//-------SHORT HAND NOTation =---------
// const balance = 1000
// if (balance > 50) console.log("high balance"),console.log("balance updated");
//not considered as a good practice 


//-------IF and elseIF statements ------
// const balance = 10000
// if (balance < 1000) {
//     console.log("less than 1000")
// } else if (balance < 5000){
//     console.log("less than 5000")
// } else if (balance < 7500){
//     console.log("less than 7500")
// } else {
//     console.log("MONEY MONEY")
// }   




//-----REAL LIFE EXAMPLE -------
const username = "dhruv"
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false
// AND CONDITION
if ( userLoggedIn && debitCard && 2 == 3){ //the && is just similar to AND  for checking of 2 conditions if they are both true then the if block gets executed else not 
    console.log("you can buy course NO WORRIES")
}


//OR CONDITIONS
if( loggedInFromEmail || loggedInFromGoogle){
    console.log(`Welcome : ${username}`)
}
