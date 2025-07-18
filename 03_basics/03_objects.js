// singleton

// through constructors 
// Object.create // this is singleton


//object - literals 

const mySym = Symbol("key1")
const userObj = {
    name : "Dhruv",
    "full name": "Dhruv Wadhwani",
    // mySym : "mykey1",
    [mySym] : "mykey1",  //[Symbol(key1)]: 'mykey1' // propogated in this way 
    age : 21,
    language : "Python",
    location : "Udaipur",
    email : "dhruv@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Tuesday"]
}
const heroObj = {
    email : "vedant@gmail.com"
}

// console.log(userObj.language)
// console.log(userObj["full name"])
// console.log(userObj.full name) // you cannot access these into directly from the . 
// console.log(userObj["language"])
// these are two ways to access the object keys value pairs 

// console.log(typeof userObj.mySym) // this is string because it does not refer to the symbol we created 
// console.log(userObj.mySym)

// console.log(userObj[mySym]) //special cases 
// console.log(typeof userObj[mySym]) // although this will now return string but it does refer to the symbol we created 

//overwriting 
userObj.email = "chatgpt@gmail.com"
// console.log(userObj)

// Object.freeze(userObj)
// userObj.isLoggedIn = false 
// console.log(userObj.isLoggedIn) // will print true only because the object is freezed 


userObj.greeting = function(){
    console.log("Hello")
}
// console.log(userObj.greeting) // function return back 
// function is not called but its reference is shown 

// userObj.greeting() // caliing of the function 

// console.log(userObj.greeting()) // hello and undefined 
// you are calling the function inside the console.log hence its printing that as well 

userObj.greetingTwo = function(){
    console.log(`Hello ${this.name} you email is ${userObj.email} and the other object created for vedant has email ${heroObj.email}`)
}
// this in JS make JS know that you are refering to the userObj object only not the other object 
//you can user userObj instead of this as well 
// you can also use attributes from diffrent objects as well like heroObj.email refering 

console.log(userObj.greetingTwo)
userObj.greetingTwo()


