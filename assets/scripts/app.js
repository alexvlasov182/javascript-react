import * as util from "./util";
import anotherAPIKey from "./util";
import {userMessage} from "./var-values";
import {add, greet, withParams, createGreeting} from "./function"

console.log(anotherAPIKey);
console.log(util.apiKey);
console.log(util.abc);

// Variables and Value
console.log('-----------------Variables and Value----------------');
console.log(userMessage);
console.log(userMessage);
const PI = "3.14159265359"
console.log(PI);

// Variables and Value
console.log('-----------------Function and Parameters----------------');
console.log(add(2,3));
console.log(greet());
console.log(greet());
console.log(greet());
withParams("John");
withParams("Alex", "Go go go ");
console.log(createGreeting("Anastasiia", "How are you?"));