// DESTRUCTURED

const course = {
    courseInstructor : "Chandan",
    courseFee : 900,
    coursePlatform : "Youtube" 
}

console.log(course.courseInstructor);
const {courseFee : Fee} = course
console.log(Fee);