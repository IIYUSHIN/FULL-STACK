const { useState } = React;

function CharacterCounter() {
    const maxLength = 150;
    const [text, setText] = useState("");

    const remaining = maxLength - text.length;

    let counterClass = "counter";
    if (remaining <= 20 && remaining > 0) {
        counterClass += " warning";
    }
    if (remaining <= 0) {
        counterClass += " danger";
    }

    return (
        <div className="card">
            <textarea
                placeholder="Type your message..."
                maxLength={maxLength}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className={counterClass}>
                {text.length}/{maxLength}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <CharacterCounter />
);
