import Cast from "./Cast";

const CastList = ({casts, onDelete}) => {
    const castComponents = casts.map(
        cast => <Cast cast={cast} onDelete={onDelete} key={cast.id}/>
    );

    return (
        <div className="cast-layout">
            <h2>All Actors:</h2>
            <div className="cast-tile-container">
                {castComponents}
            </div>
        </div>
    );

}

export default CastList;
