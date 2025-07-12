// console.log(2>1); //true
// console.log(2==1); //false
// console.log(1==1); //true
// console.log(1<=1); //true
// console.log(1>=1); //true
// console.log(1!=1); //false

// console.log("2" > 1)
// console.log("02" > 1)
// console.log("2abc" > 1)
// console.log("2abc" < 1)

/* "2abc" is not a valid number.

Number("2abc") results in NaN (Not a Number).

So you're comparing: NaN > 1 */


// console.log(null > 0); //0>0 false
// console.log(null < 0);  // 0<0 converted  false
// console.log(null == 0);  // special case it is false 
// console.log(null <= 0);  // true 
// console.log(null <= 0);   //true
// console.log(null != 0);  //inversion of special case --- true

// console.log(NaN == 0)

// console.log(undefined == 1) //false 
// console.log(undefined >= 0) //false

console.log(true>0) //true
console.log(false>0) //false
console.log(false==0) //true


// **********Strict check ******
// checks the data type as well

console.log("2" == 2) //true
// == checks it after "2" is converted 

console.log("2" === 2) //false
// strict checking as well do not convert anything 