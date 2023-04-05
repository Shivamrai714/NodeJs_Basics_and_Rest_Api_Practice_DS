// STEP 2 : importing the given module.
const myfun =  require("./third_mymodule");
const chkfun = require("./third_mymodule");

console.log("using the function of the another module here ")

const avg =  myfun(4,5,6);
console.log("Answer  avg is " + avg)


console.log("Check input number is prime or not : ");
let no = 51;
let chk = chkfun(no);
console.log(`The number  ${no} is a prime no : ` +  chk)
