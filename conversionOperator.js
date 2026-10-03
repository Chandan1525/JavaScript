let score = "33abc"
let score2 = null; 
console. log(typeof score) ;
console. log(typeof (score) ) ;

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
console. log(typeof valueInNumber);
console. log(valueInNumber);
console. log(valueInNumber2);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someString = 23;
let stringNumber = String(someString);
console.log(stringNumber);
console.log(typeof stringNumber);
