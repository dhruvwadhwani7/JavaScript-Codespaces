// this is promise creation

const promiseOne = new Promise(function(resolve,reject){
    //Do an async tasks
    // DB Calls, crytography , network call
    setTimeout(function(){
        console.log("Async task is complete")
        resolve() 
    },1000)
}) 
/*t=0s: Promise created
t=1s: "Async task is complete" -> resolve() -> promise becomes fulfilled
then() callback runs now
 */

//once created you have to consume promise 
promiseOne.then(function(){
    console.log("Promise consumed")
})

//resolve is diretly connected to .then()
//.then() takes a callback
//promise consumed never appeared because then and resolve is not connected
//resolve is a method that you have to call while creating the promise

//--------------------without variables
//promise does not need to be store into a variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2 done")
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise consumed successfully")
})

//then is used sucha that it is to inform that the particular task done 
//async task 2 done
//promise consumed successfully


//------------promise3 
//what we have to pass the varibales in the .then()
//you can pass objects arrays fucntion in resolve 
// the data passed in resolve is printed in the .then() 
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({
            username:"Dhruv",
            email:"dhruv@gmail.com"
        })
    },1000);
})
promiseThree.then(function(user){
    console.log(user)
    console.log(user.username)
})


//--------Promise4 ----
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({
                username:"Dhruv",
                email:"dhruv@gmail.com"
            })
        }else{
            reject('ERROR something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})

//the value returned in the first .then() can be passed into secodn .then() this is called chaining
// the passed on value is that one which you defined in the return keyword 
