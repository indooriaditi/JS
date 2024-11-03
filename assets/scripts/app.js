// [import/export]
//import { apiKey } from "./util.js"
//import { apiKey, abc as content } from "./util.js"
//import * as util from "./util.js"

// import apiKey from "./util.js";

// [variables]
// can reassign
// let userMessage = "Hello, world";
// userMessage = "Hi!"
// console.log(userMessage);

// can't reassign
// const name = "aditi";

// [operators]
// console.log("hello"+"world");
// console.log(3===4);

//[functions]
function greet(userName, message) {
    // console.log(userName);
    // console.log(message);
    return userName + " " + message;
}

const greeting = greet("Aditi","Hello"); // because function is returning something
console.log(greeting);

// arrow function/anonymous function
const greetAnon = (userName, message) => {
    // console.log(userName);
    // console.log(message);
    return userName + " " + message;
}