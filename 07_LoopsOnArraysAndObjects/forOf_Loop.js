myArray = [1,2,3,4,5]
for(const val of myArray){
    console.log(val);
}
//no need of the iteration increment or decrement 

// for (const element of object) { }

// const string1 = "Greetings"
// for (const s of string1) {
//     console.log(s)
// }


//MAPS 
const map = new Map()
map.set('IN','India')
map.set('US',"United States")
map.set('FR',"France")

map.set('FR',"hello") //IN' => 'India', 'US' => 'United States', 'FR' => 'hello'
//changes the value

console.log(map);
//{ 'IN' => 'India', 'US' => 'United States', 'FR' => 'France' } 

//map destructring 
for (const key of map) {
    console.log(key)  //[ 'IN', 'India' ] [ 'US', 'United States' ] [ 'FR', 'hello' ]
}

// what if i have to stroe ther key and the value sepratoely 
for (const [key,value] of map) {
    console.log(key) //IN US FR
    console.log(value)  //prints the values 
    //seprates the keys and the values from each other 
}

// const myGames = {
//     game1 : "NFS",
//     game2 : "spiderman"
// }
// for (const [key,value] of myGames) {
//     console.log(key) 
//     console.log(value)  
// }
//object is not iterable 
