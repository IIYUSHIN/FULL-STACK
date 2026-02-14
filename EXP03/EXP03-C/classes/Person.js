// Base Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name}.`;
    }

    getType() {
        return "Person";
    }
}

export default Person;
