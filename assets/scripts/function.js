export function add(a,b) {
    return a + b;
}

export function greet() {
    let message;
    message = "Hello from function";
    return message;
}

export function withParams(userName, messageParams= "hello") {
    console.log(userName);
    console.log(messageParams);
}

export function createGreeting(userName, messageParams = "hello") {
    return "Hi, I am " + userName + ". " + messageParams;
}