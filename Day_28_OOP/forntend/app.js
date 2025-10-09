// let arr = [1,2,3];
// arr.sayHello = () => {
//     console.log("Hello I am Hitesh");
// }

// function personmaker(name, age) {
//     const person = {
//     name : name,
//     age : age,
//     talk() {
//         console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
//     }
//     };
//     return person;
// }


// let p1 = personmaker("Hitesh", 24);
// let p2 = personmaker("Ramesh", 25);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let p1 = new Person("Hitesh", 24);
let p2 = new Person("Ramesh", 25);