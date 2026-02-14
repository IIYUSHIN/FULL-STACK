import { useState } from "react";
import BookCard from "./BookCard";
import "./LibraryManagement.css";

function App() {
    // Sample initial books
    const [books, setBooks] = useState([
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
        { id: 3, title: "1984", author: "George Orwell" },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [newBook, setNewBook] = useState({ title: "", author: "" });

    // Search filtering
    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle add book
    const handleAddBook = (e) => {
        e.preventDefault();
        const trimmedTitle = newBook.title.trim();
        const trimmedAuthor = newBook.author.trim();

        if (!trimmedTitle || !trimmedAuthor) {
            alert("Please enter both title and author");
            return;
        }

        const book = {
            id: Date.now(),
            title: trimmedTitle,
            author: trimmedAuthor,
        };

        setBooks([...books, book]);
        setNewBook({ title: "", author: "" });
    };

    // Handle remove book
    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <div className="library-container">
            <h1 className="library-title">Library Management System</h1>

            {/* Search Box */}
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Add Book Form */}
            <form className="add-form" onSubmit={handleAddBook}>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    className="form-input"
                />
                <button type="submit" className="add-btn">
                    Add Book
                </button>
            </form>

            {/* Book List */}
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        onRemove={() => handleRemoveBook(book.id)}
                    />
                ))}
                {filteredBooks.length === 0 && (
                    <p className="no-books">No books found</p>
                )}
            </div>
        </div>
    );
}

export default App;
