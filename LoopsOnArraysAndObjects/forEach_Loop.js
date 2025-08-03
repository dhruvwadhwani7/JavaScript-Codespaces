const myArray = ['js', 'cpp', 'rb', 'py' ]

myArray.forEach( function name() {} ) //normally this how you write this forEch because this accepts a callback function
//but remember that callback functions do not have a name

// hence it is written like this 
myArray.forEach( function (item) {
    console.log(item)
})

//using arrow functions
myArray.forEach( (item) => {
    console.log(item)
})


//using function other then declaring inside it 
function printMe(item) {
    console.log(item)
}
myArray.forEach(printMe)

//MULTIPLE VALUE CAN BE TAKEN AS A INPUT IN THE FOR EACH LOOPS 
myArray.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})



const coding = [ 
    {
        languageName : "Javascript",
        fileName : "js"
    },
    {
        languageName : "Java",
        fileName : "java"
    },
    {
        languageName : "Python",
        fileName : "py"
    }
]

coding.forEach( (item) => {
    console.log(item.languageName)
})
