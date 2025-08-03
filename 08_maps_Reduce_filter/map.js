const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);
//in form of an arry it returns
/*[ 
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
    ] */
console.log(newNums)
   
//Chaining of diffrent methods 
const ChainNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter ( (num) => num > 50)
   
console.log(ChainNums);