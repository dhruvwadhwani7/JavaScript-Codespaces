const course = {
    courseTeacher : "Dhruv",
    courseName : "JS in HINDI",
    coursePrice : 1000
}

console.log(course.coursePrice)
console.log(course.courseTeacher)
// console.log(courseTeacher) // this will genrate an error then the courseTeacher is not defined 
 

//syntax other then console.log(course.courseTeacher)

const {courseName} = course
const {courseTeacher} = course

console.log(courseName)
console.log(courseTeacher)

//you can name them as well to your accordance
const {coursePrice : Price} = course
console.log(Price)
// the coursePrice is renamed as Price !! 


//ABout the API -- Application programming interface

// the data coming from API's are in a format of JSON 
// JSON - javascript object notation

// {
//     "name" : "Dhruv",
//     "email" : "hello@gmail.com",
//     "course" : "JS"
// }

// sometimes json format data is given in array with multiple objects 
[
    {

    },
    {

    },
    {

    }
]