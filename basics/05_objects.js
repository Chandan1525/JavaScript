// singleton
// how to represent objects using constructor 
const instaUser = {};
instaUser.name = "Chandan";
instaUser.id = "chandan123";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
    email : "chandan@gmail.com",
    fullName: {
        userFullName:{
            firstName : "Chandan",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.firstName.lastName); //undefined one object at a time 
// console.log(regularUser.email.fullName?.userFullName.firstName); // ? used to chack if the next object is available 

// COMBINING OBJECT

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

const obj3 = Object.assign({},obj1,obj2); 
// use dto combine objects in one {} this is used to keep the resultant of obj1,obj2 in {} it is optional if we will not give {} the resultant will be stored in obj1 by default.
// console.log(obj3);


const obj4 = {...obj1,...obj2}; // ... used to spread objects 
//console.log(obj4);

const Users = [
    {
        userId : 1,
        userMail : "a@gmail.com" 
    },

    {
        userId : 1,
        userMail : "a@gmail.com" 
    },

    {
        userId : 1,
        userMail : "a@gmail.com" 
    },

    {
        userId : 1,
        userMail : "a@gmail.com" 
    }
]

Users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser)) // print keys
console.log(Object.values(instaUser)) // print values
console.log(Object.entries(instaUser)) // print the values in array 