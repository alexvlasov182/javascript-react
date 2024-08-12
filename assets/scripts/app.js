import * as util from "./util";
import anotherAPIKey from "./util";
import {userMessage} from "./var-values";
import {add, greet, withParams, createGreeting} from "./function"
import {uniqueArray} from './arrow-function';
import {user, User} from './object-classes';

console.log(anotherAPIKey);
console.log(util.apiKey);
console.log(util.abc);

// Variables and Value
console.log('-----------------Variables and Value----------------');
console.log(userMessage);
console.log(userMessage);
const PI = "3.14159265359"
console.log(PI);

// Function and Parameters
console.log('-----------------Function and Parameters----------------');
console.log(add(2,3));
console.log(greet());
console.log(greet());
console.log(greet());
withParams("John");
withParams("Alex", "Go go go ");
console.log(createGreeting("Anastasiia", "How are you?"));

// Arrow Function
console.log('-----------------Arrow Function----------------');
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueArray(numbers))

// Object && Classes
console.log('-----------------Object && Classes----------------');
console.log(user);
console.log(user.userName);
console.log(user.userAge);
user.greet();
const user1 = new User("John", "38");
const user2 = new User("Nick", "42");
console.log(user1);
console.log(user2);
user1.greet();
user2.greet();
