const bodyColor = "#212121"
beginDiv = document.querySelector('.begin')
const p = document.createElement('p')
beginDiv.appendChild(p)

p.innerHTML = "Hello Welcome"
document.querySelector('.begin')
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
    p.innerHTML = "Changing color has STARTED"
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  p.innerHTML = "Stopped color changing"
};

const resetColor = function(){
    document.body.style.backgroundColor = bodyColor
    p.innerHTML = "reset to original"
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
document.querySelector("#reset").addEventListener("click", resetColor);

//hex colors
// #2131HS
