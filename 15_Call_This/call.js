function SetUsername(username){
    this.username = username
    console.log("called")
}
function createUser(username,email,password){
    SetUsername.call(username)
    // this.username = username 
    //this method is outsourced
    // in this setUsername() is not getting called  
    // this is decieving 


    this.email = email 
    this.password = password
}

const chai = new createUser("chai","chai.com","123")
console.log(chai) 
// the problem appears the username does apppears as it is nested calls 