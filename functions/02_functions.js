// ... -> rest operator

function calculateCartPrice(...num){ // used to collect the element in one single array 
    return num;
}

// console.log(calculateCartPrice(200,300,400,500,600));

function calculateCartPrice(val1, val2, ...num){ // val1-> 200 , val2-> 300 , rest-> ...
    return num;
}

// console.log(calculateCartPrice(200,300,400,500,600)); 

// HANDLING OBJECTS IN FUNCTION

const user = {
    userName : "Chandan",
    rollNumber : "2405"
}

function handleObjectInFunction(userInformation){
    // return `User name is ${userInformation.userName} User Roll is ${userInformation.rollNumber}`;
    console.log(`User name is ${userInformation.userName} User Roll is ${userInformation.rollNumber}`);
}

// console.log(handleObjectInFunction(user)); // used to print via user

handleObjectInFunction({ //  used to print via information
    userName : "Chandan",
    rollNumber : "2405"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray) {
    return getArray[1]
}

// console. log(returnSecondValue (myNewArray) ) ;