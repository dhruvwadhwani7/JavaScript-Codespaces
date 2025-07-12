let myName = "Dhruv Wadhwani"
let anotherName =  myName
anotherName = "Good Morning"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "dhruv@gmail.com",
    phoneNo : 9982399786,
    city : "Udaipur",
    state : "Rajasthan"
}

userTwo = userOne
userTwo.email = "77277@gmail.com"

console.log(userOne.email) //as it checks through refrence so it is changed 
console.log(userTwo.email)