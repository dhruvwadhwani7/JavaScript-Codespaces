function User(username,loginCount,isLoggedIn){
     //const myUsername = username
     // this practice orf naming another varibale is not used widely as it takes up memory 
     this.username = username 
     this.loginCount = loginCount
     this.isLoggedIn = isLoggedIn

     this.greeting = function(){
          console.log(`welcome user : ${this.username}`)
     }
    //  console.log(this)
     return this  //not explicity needed 

}
// User("dhurv",12,true)
const userOne = new User("dhurv",12,true)
const userTwo = new User("wadhwani",9,false)
console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor)
// [Function: User]


// User { username: 'dhurv', loginCount: 12, isLoggedIn: true }
// User { username: 'wadhwani', loginCount: 9, isLoggedIn: false }

//while declaring the userTwo it will overwrite the userOne values  without new word 

//using new word can also clear values as well 


// contains each and every informtion getters setters fetch  as it return value of this 