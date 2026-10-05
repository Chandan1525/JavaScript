function addTwoNumber(number1,number2){
    return number1+number2;
    //console.log("Chandan"); // after return this line never execute;
}

const result = addTwoNumber(3,5);
// console.log(result);

function userLoggedIn(userName = "Subham"){ // predefined if not given a value it executes as Subham but if given a value it overwrite 
    if(userName === undefined){
        console.log("enter user name");
        return;
    }
    return `${userName} logged in`;
}

// console.log(userLoggedIn("Chandan")); // whenever we use return wo need to console.log to print the result.

console.log(userLoggedIn()); // nothing passed -> undefined 
