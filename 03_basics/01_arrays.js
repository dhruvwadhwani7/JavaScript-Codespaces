const myArr = [1,2,3,4,5]
// console.log(myArr[0])

// arrays allows you to create copies 
// Shallow copies ----> share the samee refrences - changes are made in the original as well 
// Deep Copies ---> Share diffrent refrences --- changes are only made in this copies only 

const heroes = ["thor","ironman","hulk"]
// console.log(heroes.length)


// myArr.push(6) // insert 6 at end
// myArr.push(7) // insert 7 at end 
// myArr.pop() // remove the last element in the array in this case is 7 
// pop does not take any paramter 
// console.log(myArr)

myArr.unshift(9) // similar work as a "push" only but at the start only hence pushes the 9 to the start 
// but this process is too much hectic for the computer if the array is too long hence this is not optimized 
// now the array is [9,1,2,3,4,5]
// console.log(myArr)

myArr.shift() // same as pop does not take any paramter but remove the FIRST element from the array 
// console.log(myArr) //[1,2,3,4,5] => 9 is removed 


// console.log(myArr.indexOf(8)) // it will return -1 only for all the values not in there 
// console.log(myArr.indexOf(4)) //return 3 ---> index of element "4"

     
// console.log(myArr.includes(3)) //true
// console.log(myArr.includes(5)) //false

// const newArr = new Array(1,2,3,4,5)
// console.log(newArr)

const newArr = myArr.join()
// console.log(newArr) // 1,2,3,4,5 
// console.log(typeof newArr) // type is string  
 


// -------SLICE AND SPLICE -------
console.log("A : ",myArr)

const myN1 = myArr.slice(1,3) //slice means take subset from that array if possible ranges are written and print no afect to the original array 
console.log("myN1 after SLICING (1,3) : ",myN1)
console.log("B : ",myArr)


//splice 
const myN2 = myArr.splice(1,3) //splice removes the subset array from the original array 
//it manipulates the origianl array ... the 3 here is inclusive means (1,3) removes the index values at 1,2,3  
console.log("myN2 after SPLICING (1,3) : ",myN2)
console.log("C : ",myArr)