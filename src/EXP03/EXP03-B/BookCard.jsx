function BookCard({ title, author, onRemove }) {
    return (
        <div className="book-card">
            <div className="book-info">
                <h2 className="book-title">{title}</h2>
                <p className="book-author">by {author}</p>
            </div>
            <button className="remove-btn" onClick={onRemove}>
                Remove
            </button>
        </div>
    );
}

export default BookCard;
