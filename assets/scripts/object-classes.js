export const user = {
     userName: "Alex",
     userAge: 36,

     greet() {
          console.log("Hello " + this.userName + " I am " + this.userAge + " years old.");
     }
}

export class User {
     constructor(name, age) {
          this.name = name;
          this.age = age;
     }

     greet() {
          console.log("hello! " + this.name);
     }
}

const user1 = new User("John", "37");
console.log(user1);