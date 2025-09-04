//you can the input value or extract it through the event listener only 

//form is a type of sumbit ---
//POST OR GET 
//we are not sending this to the server so you have to prevent the default 

// while saving the height and weight value you can use .value 
// but this is a string value so you have to use parseInt for that 

// you should extract the value in the form submit event listener only why becase if you do outside it might take up the empty value and store it in the variable when the script runs initially 

const form = document.querySelector('form')
 
form.addEventListener('submit',function(e){
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide')

  if(height===''||height<0||isNaN(height)){
    results.innerHTML = `<div>Please give valid height input</div>`
  }
  if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML = `<div>Please give valid weight input</div>`
  }
  else{
    const bmi = (weight/((height**2)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`

    if(bmi<=18.6){
      guide.innerHTML = "<span>Under Weight</span>"
    }
    else if(bmi>18.6 && bmi<24.9){
      guide.innerHTML = "<span>normal Weight</span>"
    }
    else {
      guide.innerHTML = "<span>over Weight</span>"
    }
  }
}) 