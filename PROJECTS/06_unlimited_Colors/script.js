const main = document.body
const div = document.querySelector('.begin')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const p = document.createElement('p')

p.innerHTML = "Hello Welcome"
div.appendChild(p)

const changeColor = function(){
    const r = Math.random() * 200 
    const g = Math.random() * 200 
    const b = Math.random() * 200 
    main.style.backgroundColor = `rgb(${r},${g},${b})`
}
start.addEventListener('click',()=>{
    console.log("Start Pressed")
    const changing = setInterval(changeColor,1000)
    p.innerHTML = "YOU STARTED IT "

    stop.addEventListener('click',()=>{
        console.log("Stop Pressed")
        clearInterval(changing)
        p.innerHTML = "YOU STOPPED"
    })
})

reset.addEventListener('click',()=>{
    console.log("Resetted")
    main.style.backgroundColor = "#212121"
    p.innerHTML = "YOU PRESSED RESET BUTTON"
})

