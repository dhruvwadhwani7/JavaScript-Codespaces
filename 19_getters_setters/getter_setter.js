class User{
    constructor(email,password) {
        this.email = email 
        this.password = password
    }   
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
    get password(){
        // return "!***123*$#@"
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
        console.log("hello there password updation")
    }
}

const dhruv = new User("dhruv@gmail.com","abc")
console.log(dhruv.password) //ABC
console.log(dhruv.email)

dhruv.password = "hello"
console.log(dhruv.password) //HELLO
console.log(dhruv._password) //hello

dhruv.email = "dhruv@yahoo.com" //This calls the setter: So it stores "hello" inside this._password.
console.log(dhruv.email) //DHRUV@YAHOO.COM
//This calls the getter: The getter takes the internal _password ("hello") and returns "HELLO".

console.log(dhruv._email) //dhruv@yahoo.com
// This directly accesses the raw stored property without going through the getter.
// It prints the exact stored string: "hello"



/*//Anyone can directly access or change the password:
dhruv.password = "hacked"
console.log(dhruv.password) //hacked
// There's no validation, no protection, no control over how the password is used or stored.
// Getter hides the actual password and can return something safe (like ********).

//Setter validates new values before allowing assignment. 
*/

/*set password(value){
        this.password = value 
        console.log("hello there password updation")
    }

    // Maximum call stack size exceeded
        
    //in this setter is called again and agin because constructir and setter both tryu to set value */


//the maximum call stack error is becaus eof setter 
//because of this we use a new variable decalration "_password" for that so there is no confusion between the constructor and setter 
//sfter using "_password"  the error is of getter because it does not matches 

//now as  the password declaration is happending in the getters and setters so in get passowrd() we also have to use "_password"