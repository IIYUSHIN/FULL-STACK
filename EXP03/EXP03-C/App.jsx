import Person from "./classes/Person";
import Student from "./classes/Student";
import Teacher from "./classes/Teacher";
import PersonCard from "./PersonCard";
import "./PersonHierarchy.css";

function App() {
    // Create instances demonstrating inheritance and polymorphism
    const person = new Person("Alex Johnson", 30);
    const student = new Student("Emma Watson", 20, "Computer Science");
    const teacher = new Teacher("Dr. Robert Smith", 45, "Mathematics");

    // Array demonstrating polymorphism - all have introduce() method
    const people = [person, student, teacher];

    return (
        <div className="hierarchy-container">
            <h1 className="hierarchy-title">Person Class Hierarchy</h1>

            <div className="person-list">
                {people.map((personObj, index) => (
                    <PersonCard
                        key={index}
                        person={personObj}
                        name={personObj.name}
                        age={personObj.age}
                        type={personObj.getType()}
                        introduction={personObj.introduce()}
                        additionalInfo={
                            personObj instanceof Student
                                ? `Major: ${personObj.major}`
                                : personObj instanceof Teacher
                                    ? `Subject: ${personObj.subject}`
                                    : null
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
