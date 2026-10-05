// Immediately Invoked Function Expressions (IIFE)


//()() 1st ()-> for function 2nd ()-> for execution

// used to remove the polution occured by global scope 

(function one(){ // Named IIFE because of one 
    console.log("Hello");
})();

// uisng arrow function

((name) => {  // Simple IIFE
    console.log(`Hii ${name}`);
})("Chandan");
