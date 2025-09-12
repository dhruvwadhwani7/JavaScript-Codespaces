const user = {
    username : "dhruv",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username is : ${this.username}`)
        console.log(this) //current context 
    }
}
// this is the Object literal 

const user2 = {
    username : "dhruv",
    loginCount : 8,
    signedIn : true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username is : ${this.username}`)
        console.log(this) //current context 
    }
}


console.log(user.loginCount)
// console.log(user.getUserDetails())
//not to be wrapped in the console.log()
user.getUserDetails() 


console.log(this)  //{}
// this is global context
//it can change multiple times 

// in browser you get window object when you run console.log(this)



// now when you have to create many users it is hectic for that you use constructors functions