// outside {} -> global scope 

if(true){  // inside {} -> block scope 
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // should be declear outside the scope ->{}
// console.log(b); // should be declear outside the scope ->{}
// console.log(c);


// SCOPE

function one(){
    const userName = "Chandan";

    function two(){
        const rollNumber = 2405;
        // console.log(userName);
    }
    // console.log(rollNumber);
    two();
}
one();


// **************************************** IMPORTANT ****************************************
addOne(5);
function addOne(num){
    return num+1;
}

// addTwo(7); // we cannot call function before declare 
const addTwo = function(num){
    return num+2;
}
