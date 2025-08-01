//--------SYNTAX--------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//--EXAMPLE---
//similarly for the strings can also be done
const number = 3
switch (number) {
    case 1:
        console.log(`Number is : ${number}`)
        break;
    case 3:
        console.log(`Number is : ${number}`)
    case 4:
        console.log("Number is 4")
    default: //NOthing executes then this 
        console.log("HELLO")
        break;
}

//break is used because if any case mathes and there is no break; code then JS will not mathc the belo cases and all the code will be executes below that matched case 
//EXCEPT DEFAULT 