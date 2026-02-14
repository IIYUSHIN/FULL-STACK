import { useState } from "react";
import ProductCards from "./EXP03/EXP03-A/App";
import LibraryManagement from "./EXP03/EXP03-B/App";
import PersonHierarchy from "./EXP03/EXP03-C/App";
import "./Navigation.css";

function Navigation() {
    const [currentExp, setCurrentExp] = useState(null);

    if (currentExp === "A") return <ProductCards />;
    if (currentExp === "B") return <LibraryManagement />;
    if (currentExp === "C") return <PersonHierarchy />;

    return (
        <div className="nav-container">
            <h1 className="nav-title">EXP03 - React Experiments</h1>
            <p className="nav-subtitle">Choose an experiment to view</p>

            <div className="nav-grid">
                <button className="nav-card" onClick={() => setCurrentExp("A")}>
                    <div className="card-header">EXP03-A</div>
                    <h3>Product Cards</h3>
                    <p>Responsive product cards with ratings and cart functionality</p>
                </button>

                <button className="nav-card" onClick={() => setCurrentExp("B")}>
                    <div className="card-header">EXP03-B</div>
                    <h3>Library Management System</h3>
                    <p>Search, add, and remove books using React hooks</p>
                </button>

                <button className="nav-card" onClick={() => setCurrentExp("C")}>
                    <div className="card-header">EXP03-C</div>
                    <h3>Person Class Hierarchy</h3>
                    <p>OOP concepts: inheritance, polymorphism, method overriding</p>
                </button>
            </div>
        </div>
    );
}

export default Navigation;
