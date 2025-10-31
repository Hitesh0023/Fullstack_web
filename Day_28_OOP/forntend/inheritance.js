class person{
    constructor(name,age){
        console.log("person constructor called");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

class student extends person{
    constructor(name,age,marks){
        console.log("student constructor called");
        super(name,age);
        this.marks = marks;
    }
    // talk(){
    //     super.talk();
    //     console.log(`My marks are ${this.marks}`);
    // }
}
let student1 = new student("Rohit",23,89);

class teacher extends student{
    constructor(name,age,marks,subject){
        console.log("teacher constructor called");
        super(name,age,marks);
        this.subject = subject;
    }
}