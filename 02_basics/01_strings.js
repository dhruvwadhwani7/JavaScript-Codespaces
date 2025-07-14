const myName = "Dhruv"
const clickCount = 50 
console.log(clickCount + " is the Value of clicks of person " + myName);
// this is string interpolation 
console.log(`My name is ${myName.toUpperCase()} click count is ${clickCount}`);

// String decalration using objcrts 
const gameName = new String("Mario")
console.log(gameName) //[String: 'Mario']

/*
String {'Mario'}
0: "M"
1: "a"
2: "r"
3: "i"
4: "o"
length: 5
[[Prototype]]: String[[PrimitiveValue]]: "Mario"*/

console.log(gameName[0]); // accesing the keys 
console.log(gameName.slice(0,3)); // accessign the prototypes 

console.log(gameName.__proto__) // for seeign the prototypes
console.log(gameName.toUpperCase()); //function
console.log(gameName.length); // 5 
console.log(gameName.charAt(2)) //r 
console.log(gameName.charAt("M")) // wrong because the charAt function takes the input of number or index input and JS will convert this into the number 
// "M" => NaN => 0 (for indexing)
// so console.log(gameName.charAt("D")) => console.log(gameName.charAt(0))   hence ans M 

console.log(gameName.charAt("4")) //0


// for returning index 
console.log(gameName.indexOf("r")) // 

const newString = gameName.substring(1,4)
console.log(newString)  

console.log(gameName.split(''))
//gets split into a array and separated by '' 


// slicing negative  
console.log(gameName.slice(-5,4)) //Mari
console.log(gameName.split('').reverse().join('')) //reverses the string 

    const newStringOne = "    #####Dhruv Wadhwani   "
console.log(newStringOne)
console.log(newStringOne.trim()) //removes the trailing white spaces


// replace and includes
const url = "https://github.com/dhruvwadhwani7/JavaScript-Codespaces"
const url2 = "https://www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows"

console.log(url.replace("dhruv","hello"))
console.log(url.includes("https")) //true
console.log(url.startsWith("https://github")); //true
console.log(url.startsWith("hello")); //false

console.log(url2.replace("download","JS")) // replaces only first occurrences 
console.log(url2.replace(/download/g, "JS")); // repalce all occurences using /g as global flag in JS

//spliting 
console.log(url.split("/"))
console.log(url.split(" "))
console.log(url.split("-"))