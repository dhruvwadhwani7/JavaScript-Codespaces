const user = {
    username : "dhruv",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){
        console.log("Got user details from database")
    }
}
// this is the Object literal 
console.log(user.loginCount)
// console.log(user.getUserDetails())
//not to be wrapped in the console.log()
user.getUserDetails() 