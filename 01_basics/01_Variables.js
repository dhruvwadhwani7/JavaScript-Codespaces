const AccountID = 12345
let AccountEmail = "dhruv@gmail.com"
var AccountPassword = ""
AccountCity = "Udaipur"
let AccountState;  //semicolon is not necessary 

// AccountID = 99999  --- Genrates an error because of reassignment of the const variable - NOT ALLOWED 
console.log(AccountID);

// let AccountEmail = "mansi@gmail.com"  // will generate an error because let does not allow redeclaration it allows reassignment 

var AccountPassword = "209193019" // var allows to redecalre as well as reassign

AccountEmail = "hello@gmail.com"
AccountPassword = "hello1234" 
AccountCity = "Jaipur"
// AccountState = "India"
console.log(AccountEmail)

console.table([AccountEmail,AccountID,AccountPassword,AccountCity,AccountState])
//Account state will print undefined 
