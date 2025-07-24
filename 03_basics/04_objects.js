// const tinder = new Object()
const tinder = {}
tinder.id = "123abc"
tinder.name = "Vedant"
tinder.isLoggedIn = true
// console.log(tinder)

const regularUser ={
    email : "dhruv@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Dhruv",
            lastname : "Wadhwani"
        }
    },
} 
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname?.userfullname.firstname)
// this question mark is used when calling these commands through API or server calls then it sees if the object (in this case "fullname" exists or not ---- SOME SORT OF PROTECTION)

// object merging
obj1 = {1:"a",2:"b"}
obj2 = {3:"c",4:"d"}
// obj3 = { obj1, obj2}
// console.log(obj3)
// it prints a object inside a object instead of merging of the two objects 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'd' } }


const obj4 = Object.assign(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2)
console.log(obj4) 
console.log(obj5) 

console.log(obj1)

//there is no diffrence between these in this case 
// Object.assign(target,source) ----> here target and source both are objects or enumerate objects 

// in the first case 
// const obj4 = Object.assign(obj1,obj2)
// the obj1 is directly changed and also got stored into the obj4 as well 
// so the obj1 and obj4 are same now ---> through this syntax the obj1 gets changed 


//in the second case 
// const obj5 = Object.assign({},obj1,obj2)
// the obj1 remians unchanged all the changes are made it into the obj5 only which is newly created
// the obj1 and obj2 remians unchanged hence this is considered as a better syntax option

//usage of the spread operator 
const obj6 = {...obj1,...obj2}
console.log(obj6)
 

const users = [
    {
        id:1,
        email:"1@gmail.com",
        name :{
            firstname : "first",
            lastname : "F"
        }
    },
    {
        id:2,
        email:"2@gmail.com",
        name :{
            firstname : "Second",
            lastname : "S"
        }
    },
    {
    },
    {
    }
]
console.log(users[0].email)
console.log(users[1].name?.firstname)
console.log(users[2].name?.firstname)//undefined cause empty 


console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
//Object.keys() returns an array so that it can be looped once again for further use 

//for each key value pair to be entered into the atrray in the array 
console.log(Object.entries(tinder))


console.log(tinder.hasOwnProperty('isLoggedIn')) //--->MOST IMPORTANT 
console.log(Object.hasOwn(tinder,"isLoggedIn"))
console.log(Object.hasOwn(tinder,'isLoggedIn'))
