const languageObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "python"
}
// console.log(Object.keys(languageObj)) //[ 'js', 'cpp', 'rb', 'py' ] in array format 

// for (const key in languageObj) {
//     console.log(key)
//     console.log(languageObj[key])
// }

const myArray = ['js', 'cpp', 'rb', 'py' ]

// for (const key in myArray) {
//     console.log(key) //index printing 
//     console.log(myArray[key])
// }

const map = new Map()
map.set('IN','India')
map.set('US',"United States")
map.set('FR',"France")

for (const key in map) {
    console.log(key)
}