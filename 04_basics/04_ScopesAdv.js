let a = 2000
if(true) {
    let a = 20
    console.log("Inner value of a (BLOCK SCOPED) : ",a) // it will print 20 because of the block scoped "a"
}
console.log("Outer value of a (GLOBAL SCOPE) : ",a) //200 -- global scope "a"
// the block scoped varibale decalration of a in the if block is diffrent from the global scope varibale decalration of a 