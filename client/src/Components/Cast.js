const Cast = ({cast,onDelete}) => {
    return (
        <div className="cast">
            <h3>{cast.name}</h3>
            <p>Actor's Age: {cast.age}</p>
            <p>Actor's Bio: {cast.bio}</p>
            
            <button onClick={() => onDelete(cast.id)}>Remove Actor</button>
        </div>
    )


}

export default Cast;