const user = {
    name : "Chandan",
    roll : 2405,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome`); // this -> used to access the context of the object
        console.log(this); // used to print the entire thing in the object 
    }
}

// user.welcomeMessage();
// user.name = "sam";
// user.welcomeMessage();

// console.log(this); // used to return {}

// ---------------------------1st way to define a function---------------------------------
// function one(){
//     let userName = "Chandan";
//     console.log(this.userName); // show undefined because this is always used inside scope
// }
// one();

// --------------------------2nd way to define a function-----------------------------------
// const two = function(){
//     let userName = "Chandan";
//     console.log(this.userName);
// }

// two();
 
// -------------------------3rd way to define a function-------------------------------------
// const three = () => {
//     let userName = "Chandan";
//     console.log(this.userName);
// }

// three();

// PARAMATER 

// const addTwo = (num1, num2) => { // IF CURLY BRACES IS USED THEN WE HAVE TO WRITE RETURN 
//     return num1 + num2
// }

// IMPLICIT FUNCTION -> ONLE FOR ONE LINE EXECUTION // IF CURLY BRACES IS NOT USED THE NO NEED TO USE RETURN 
const addTwo = (num1, num2) =>  (num1 + num2)

console. log(addTwo(3, 4))