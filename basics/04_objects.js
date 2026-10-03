// Object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "Chandan",
    "full name" : "Chandan Kumar",
    [mySym] : "mykey1",  // used to declear key symbol in object from 
    age : 20,
    location : "Bokaro",
    email : "chandan9a15@gmail.com",
    isLoggedIn : true,
    lastLogin : ["Monday","Tuesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // other way to print 
// console.log(jsUser[mySym]);

jsUser.email = "chandan91@gmial.com"; // used to overwrite the code previous code 

console.log(jsUser["email"]);

// Object.freeze(jsUser); // used such that no one can overwrite the code afterwords 

jsUser.email = "chandan00@gmial.com"; 

console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());