//falsy values 
const userEmail = "dhruv@gmail.com"
if(userEmail) {
    console.log(`Got user email : ${userEmail}`)
} else {
    console.log("DONT HAVE EMAIL ID ")
}

const userArray = []
if(userArray.length === 0){
    console.log("empty array")
}

const userObj = {}
if(Object.keys(userObj).length === 0){
    console.log("empty object ")
}
//----FALSY VALUES----
//false , 0 , -0 , null , undefined , BigInt , 12132n , "" (empty string) , NaN 

//Truthy values 
// "0" , 'false' "false" , " ", [], {} , function(){}



//CONSOLE
console.log(false == 0)
// true

console.log(false == '0')
// true

console.log(false === NaN)
// false

console.log(false == '')
// true

console.log(0 == "")
// true

console.log(0 == '')
// true

