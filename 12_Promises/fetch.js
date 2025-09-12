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