//------> MAJOR PROBLEM --- WYHY NEEDING MAP REDUCE FILTER
// const coding = ['js', 'cpp', 'rb', 'py' ]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(values) //undefined
// because it does not return anything

//what if i want to retiurn some values or use these values for more operations

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//FILTER
const filteredValues = myNums.filter((num) => num > 5);
console.log(filteredValues);

const filteredValues2 = myNums.filter((num) => {
  // as now scopes are opened return keyword is to be opened
  return num > 5;
});
console.log(filteredValues2);

//using for each only
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums); //not wrong

//examples

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userFilteredBooks = books.filter( (bookObj) => bookObj.genre === "History" && bookObj.publish === 1986)

userFilteredBooks = books.filter( (bookObj) => {
    return bookObj.publish > 2000
})
console.log(userFilteredBooks)


