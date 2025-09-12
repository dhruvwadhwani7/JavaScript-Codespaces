//use of super keyword such that it inherits the methods from the above 

class User{
    constructor(username){
        this.username = username 
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        //super keyword goes to the class which is extended 
        //you can use it then again easily
        this.email = email
        this.passowrd = password
    }
    addCourse(){
        console.log(`A course is added by the teacher named ${this.username}`)
    }
}

const userOne = new Teacher("dhruv","dhruv@gmail.com","123")
userOne.logMe()
//you can use beacuse it inherits the methods 

userOne.addCourse()

const userTwo = new User("mahesh")
//now mahesh is inly a user not  a teacher so it has no methods of the teacher class
userTwo.logMe()

//BUT 
// userTwo.addCourse() //genrate error 

console.log(userOne === userTwo) //false
//they are not equal 

console.log(userOne === Teacher) //false
//userOne is a instance of Userone do not take full Teacher

//new keyword instanceof 
console.log(userOne instanceof Teacher) //true

// userOne is also a instanceof User class --HENCE
console.log(userOne instanceof User) //true

//Talking of the userTwo
console.log(userTwo instanceof User) //true

// but if check
console.log(userTwo instanceof Teacher) //false