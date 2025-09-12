// multiplyBy5 = (num)=> num*5
function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2 
//you can declare valeue as an objects
// as everything in JS goes to object at the end 



console.log(multiplyBy5(2))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)



function createUser(username,score){
    this.username = username
    this.score = score  
}

//you can inject a new method in this
//but it has no context  
createUser.prototype.increment = function(){
    this.score++
}
// this.score++ means jis ne bhi bulaya h uska score bulao 
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = createUser("tea",100)

chai.printMe()
tea.printMe() //this will genrate error 