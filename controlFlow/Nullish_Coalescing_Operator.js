// Nullish Coalescing Operator  ----> ??
// ?? this operator is just a error cehcking of saftey checks for the null or undefined values only 
// if it gets the value such that it is not null or undefined it will assign thjat to the variable 
// but if doesnot get it the next value will be assigned 
// you can use multiple ?? in the same line for safety checks 

let val1;
val1 = 10

//BASICS
console.log(val1) // 10

//INTRODUCTION OF ??
val1 = 10 ?? 5
console.log(val1) //10

//using null 
val1 = null ?? 200
console.log(val1) //200

//using undefined 
val1 = undefined ?? 3000
console.log(val1) //3000

//MULTIPLE ??
val1 = null ?? undefined ?? 252
console.log(val1) //252

val1 = null ?? 20 ?? 423
console.log(val1) //20



