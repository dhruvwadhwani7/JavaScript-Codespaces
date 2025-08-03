//------> MAJOR PROBLEM --- WYHY NEEDING MAP REDUCE FILTER 
// const coding = ['js', 'cpp', 'rb', 'py' ]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values) //undefined 
// because it does not return anything 

//what if i want to retiurn some values or use these values for more operations 


const myNums = [1,2,3,4,5,6,7,8,9,10]
//FILTER 
const filteredValues = myNums.filter( (num) => num>5 )
console.log(filteredValues)

const filteredValues2 = myNums.filter( (num) => { // as now scopes are opened return keyword is to be opened 
    return num > 5
} )
console.log(filteredValues2)



//using for each only 
const newNums = []
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
} )
console.log(newNums)   //not wrong 