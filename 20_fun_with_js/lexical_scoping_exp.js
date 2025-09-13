// function init() {
//       let name = "Mozilla"; // name is a local variable created by init
//       function displayName() {
//         // displayName() is the inner function, that forms a closure
//         console.log(name); // use variable declared in the parent function
//       }
//       displayName();
//     }
//     init();

function outer() {
  let username = "dhruv";

  function inner(){
    console.log(username)
  }
  function innerTwo(){
    console.log(username)
  }
  inner()
  innerTwo()
}

outer() //dhruv
console.log( "TOO OUTER" ,username)
//username is not in the scope of the function

//ReferenceError: username is not defined
