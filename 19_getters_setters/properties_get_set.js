function User(email,password){
    this._email = email 
    this._password = password 

    // console.log(Object.getOwnPropertyDescriptor(this,"email"))
    Object.defineProperty(this,'email',{
        get:()=>{
            return this._email.toUpperCase()
        },
        set:(value)=>{
            this._email = value
        }
    })
}

const userOne = new User("dhruv@gmail.com","adn") 
console.log(userOne)


// {
//   value: 'dhruvgmail.com',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }