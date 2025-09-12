//---------promise 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Dhruv",
        email: "dhruv@gmail.com",
        password: "123",
      });
    } else {
      reject("ERROR something went wrong with the JS");
    }
  }, 1000);
});

//you can handle the promise using the async and await
/*async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
    //console.log(await promiseFive)
}*/
//response -- { username: 'Dhruv', email: 'dhruv@gmail.com', password: '123'}
// the async await block does handle the error gracefully

// async function consumePromiseFive() {
//   try {
//     console.log(await promiseFive);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     //this is in string
//     // console.log(response)
//     const data = await response.json();
//     //the response.json() takes time so we have to use await
//     console.log(data);
//   } catch (error) {
//     console.log("E",error)
//   }
// }
// getAllUsers();

//with try catch-- .then()
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log("Error produced")
})
.finally(()=>{
  console.log("Done all the things")
})