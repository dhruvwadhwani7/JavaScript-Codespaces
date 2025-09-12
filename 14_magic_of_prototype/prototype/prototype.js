let myName = "dhruv     "
// console.log(myName.length) //10
//what if you have to find the trueLength of the str you cna do this by ths 
// console.log((myName.trim()).length) //5


// what if you have to creat ea new function of prototype 
// console.log(myName.trueLength)

const myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`the spidy power is ${this.spiderman} `)
    }
}


//now suppose you have to use a random name mehtod in the Object you created "heroPower" like heroPower.dhruv()

// but there is no dhruv named method in the prototype that exists in th heroPower

// so while creating diffrent prototype for each array string or any object you created simpley create a prototyp of a object type as each data type will go through  object in the JS 


Object.prototype.dhruv = function(){
    console.log("Dhruv method is present into all objects ")
}

heroPower.dhruv()


// accroding to the theory dhruv() mehtod should also go thte array 

myHeros.dhruv()

//by accessignt eh top level heirarchy ypou can inject this method into the things you created 



// the question arrises that what you if inject a method in the lower heirarchy will it be available to the higher one ????

// you inject a mehthod in the array --it will be available to the array
// will it be available to the object ??????????
Array.prototype.HeyDhruv = function(){
    console.log("Hey Dhruv hello how are you")
}

myHeros.HeyDhruv()

//the heroPower object will not have access
// heroPower.HeyDhruv()

let anotherUserName = "Wadhwani    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
"hello   ".trueLength()
"chai".trueLength()