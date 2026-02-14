function PersonCard({ name, age, type, introduction, additionalInfo }) {
    return (
        <div className="person-card">
            <h2 className="person-name">
                {name} ({type})
            </h2>
            <p className="person-age">Age: {age}</p>
            <p className="person-intro">{introduction}</p>
            {additionalInfo && <p className="additional-info">{additionalInfo}</p>}
        </div>
    );
}

export default PersonCard;
