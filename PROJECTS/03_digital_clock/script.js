const clock = document.getElementById("clock")

// console.log(date.getTime()) //this will be in milliseconds
setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)