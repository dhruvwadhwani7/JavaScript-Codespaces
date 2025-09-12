const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Dhruv",
        email: "dhruv@gmail.com",
        password:"123"
      });
    } else {
      reject("ERROR something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log("The promise is either resolved or rejected")
  })

//the value returned in the first .then() can be passed into secodn .then() this is called chaining
// the passed on value is that one which you defined in the return keyword


