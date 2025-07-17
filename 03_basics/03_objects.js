// singleton

// through constructors 
// Object.create // this is singleton


//object - literals 

const mySym = Symbol("key1")
const userObj = {
    name : "Dhruv",
    "full name": "Dhruv Wadhwani",
    // mySym : "mykey1",
    [mySym] : "mykey1",
    age : 21,
    language : "Python",
    location : "Udaipur",
    email : "dhruv@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Tuesday"]
}
console.log(userObj.language)
console.log(userObj["full name"])
// console.log(userObj.full name) // you cannot access these into directly from the . 
console.log(userObj["language"])
// these are two ways to access the object keys value pairs 

// console.log(typeof userObj.mySym) // this is string because it does not refer to the symbol we created 
// console.log(userObj.mySym)

console.log(userObj[mySym])
console.log(typeof userObj[mySym]) // although this will now return string but it does refer to the symbol we created 

// 3:56