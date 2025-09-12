//ES6 

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password 
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    //this is called methods 

    capitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("dhruv","dhruv@gmail.com","123")
console.log(chai.encryptPassword())
console.log(chai.capitalUsername())



//Behind the scenes 

function Username(username,email,password){
    this.username = username
    this.email = email
    this.password = password 
}
Username.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Username.prototype.capitalUsername = function(){
     return `${this.username.toUpperCase()}`
}

const dhruv = new Username("dhruv","hello@gmail.com","3231")
console.log(dhruv.encryptPassword())
console.log(dhruv.capitalUsername())