import Person from "./Person";

// Teacher Class - Extends Person
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // Override introduce method
    introduce() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }

    // Override getType method
    getType() {
        return "Teacher";
    }
}

export default Teacher;
