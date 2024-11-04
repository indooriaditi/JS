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

//[OOP]
const user = {
    name: "Aditi",
    age: 24,
    
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi');
    }
}

const userobj = new User('Aditi', 24);
userobj.greet();
console.log(userobj);