let myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleDateString()); // 15/7/2025
console.log(myDate.toLocaleTimeString()); // prints the time
console.log(myDate.getFullYear());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,24,5,3,2,200);
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myOtherDate = new Date("2023-12-02");
console.log(myOtherDate);
console.log(myOtherDate.toDateString());
console.log(myOtherDate.toLocaleDateString());

console.log(myCreatedDate.getTime())
console.log(myOtherDate.getFullYear());


// time stamps

console.log(Math.floor(Date.now()/1000)) // converted into seconds

// you can get months by using get function in the dates 

console.log(myOtherDate.toLocaleDateString('defualt',{
    weekday:"long",
}));