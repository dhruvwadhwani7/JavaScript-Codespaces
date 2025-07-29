const user = {
    username : "dhruv",
    price : 999,

    welcomeMessage: function(){
        console.log(`Welcome to the website ${this.username}`)
        console.log(this)
    }
    //here the this keyword is used to refer to the current context 
    // the console.log(this) is printing the current context object 

}

// user.welcomeMessage()
// as welcomeMessage is a method in the obbject hence it is written in the "()"

// now what if you change the username 
// user.username = "chinmay"
// user.welcomeMessage() //now this will print the name of chinmay (as changed)



// console.log(this) // refering to the current context  ---- where no object is declared in the global scope 

// NOTE : it is different for the browser because previously you can only access the JS through the browser only and the global object for the browser is WINDOW OBJECT 

// Window {0: global, 1: global, 2: global, 3: global, 4: global, 5: Window, 6: global, 7: global, 8: Window, window: Window, self: Window, document: document, name: '', location: Location, …}


function chai(){
    let username = "hitesh"
    console.log(this.username)
}
chai()
//when this runs a very large content is printed with evrything including the performances etc ---> console.log(this)

// in the function when this.username is used this will print undefined because of no arrow function 
// while referring to the current context by using this.username it is --> undefined 