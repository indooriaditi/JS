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

// [OOP]
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

// [Arrays]
const hobbies = ["Cooking", "Singing", "Dancing"];
console.log(hobbies[1]);

hobbies.push("Coding");

const idx = hobbies.findIndex((item) => item === "Coding");

console.log(idx);

const hobbies2 = hobbies.map((item) => item + "!"); // can convert an item to any other type
console.log(hobbies2);

const hobbies3 = hobbies.map((item) => ({text: item})); // converting to objects

// [Destructuring]
const [firstname, lastName] = ["Aditi", "Indoori"];
console.log(firstname);

const {name, age} = { // must use same name as the property name
    name: "Aditi",
    age: 24,
}

// [Spread]
const hobbies4 = [...hobbies, "Reading", "Swimming"]; // to prevent creating nested arrays
console.log(hobbies4);

const user2 = {
    major: "CS",
    ...user
}

// [Control Structures]

// If
const passKey  = prompt("key");

if (passKey === "Hello") {
    console.log("works");
} else if(passKey === "hello") {
    console.log("also works");
} else {
    console.log("access not granted");
}

// For-Of

for (const hobby of hobbies) {
    console.log(hobby);
}

// [DOM] - A strength of JS, we can select and change elements of a HTML document
