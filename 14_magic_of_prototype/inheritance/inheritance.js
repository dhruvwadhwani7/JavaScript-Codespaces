
//linking of the information 

const User = {
    name : "dhruv",
    email : "google.com"
}
const Teacher= {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ = User
//prototypal inheritance 


//modern syntax 
Object.setPrototypeOf(TeacherSupport,TASupport)