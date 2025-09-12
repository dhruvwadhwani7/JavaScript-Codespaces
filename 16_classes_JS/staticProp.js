class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const dhruv = new User("dhruv")
console.log(User.createID())
// console.log(dhruv.createID())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const userNew = new Teacher("hello","hello@gmail.com")
userNew.logMe()

// console.log(userNew.createID())
//not avaialble as it static 

console.log(Teacher.createID())