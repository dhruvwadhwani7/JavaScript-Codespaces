const marvelHero = ["thor","ironamn","hulk"]
const dcHero = ["superman","flash","batman"]

// marvelHero.push(dcHero)
// console.log(marvelHero)
// you have t understand that array can take any input data it can take array as well 
//[ 'thor', 'ironamn', 'hulk', [ 'superman', 'flash', 'batman' ] ]
// this results in array in array 
// now the dcHero array is the 4th Element in the array of the marvelHero
// console.log(marvelHero[3]) 

// marvelHero.concat(dcHero) // as this is nt saved into a new variable 
//concat creates a new array not do its properties in same array like push 
// console.log(marvelHero) 

const allHero = marvelHero.concat(dcHero)
// console.log(allHero)


// instead of concat most used is spread operator 
const allNewHero = [...marvelHero,...dcHero]
// console.log(allNewHero)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(...anotherArr) // give elements separted 
// console.log(anotherArr.flat())
// const realArr = anotherArr.flat(3)
// const realArr = anotherArr.flat(Infinity) // here infinity is depth till how much the computer should solve it 

// console.log(realArr)



// dcHero.join()
// marvelHero.push(dcHero.join())
// console.log(marvelHero) // [ 'thor', 'ironamn', 'hulk', 'superman,flash,batman' ]


console.log(Array.isArray("Dhruv")) //false 
console.log(Array.from("Dhruv"))  //[ 'D', 'h', 'r', 'u', 'v' ] 
console.log(Array.from([1,2,3])) // Array.from()  deo not accept 2 elements

console.log(Array.from({name: "Dhruv"})) // [] gives this because it is not able to convert 

// from and of are diffrent from EACH OTHER 
// from only takes 1 input 
// of takes set of inputs 

const score1 = 100
const score2 = 200
console.log(Array.of(score1,score2,20))
