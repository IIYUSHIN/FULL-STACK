import Person from "./Person";

// Student Class - Extends Person
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    // Override introduce method
    introduce() {
        return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
    }

    // Override getType method
    getType() {
        return "Student";
    }
}

export default Student;
