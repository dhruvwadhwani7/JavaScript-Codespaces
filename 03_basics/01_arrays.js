const myArr = [1,2,3,4,5]
console.log(myArr[0])

// arrays allows you to create copies 
// Shallow copies ----> share the samee refrences - changes are made in the original as well 
// Deep Copies ---> Share diffrent refrences --- changes are only made in this copies only 

const heroes = ["thor","ironman","hulk"]
console.log(heroes.length)


myArr.push(6) // insert 6 at end
myArr.push(7) // insert 7 at end 
myArr.pop() // remove the last element in the array in this case is 7 
console.log(myArr)