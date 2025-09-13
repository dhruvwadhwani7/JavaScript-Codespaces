const User = {
    _email : "dhruv@gmail.com",
    _password : "ahak!@1121",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }

}

const helloOne = Object.create(User) 
console.log(helloOne.email)
console.log(helloOne._email)


// console.log(helloOne.password)
// console.log(helloOne._password)
// console.log(User.password)
