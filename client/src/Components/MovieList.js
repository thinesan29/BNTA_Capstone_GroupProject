import Movie from "./Movie";

const MovieList = ({movies, onDelete}) => {
    const movieComponents = movies.map(
        movie => <Movie movie={movie} onDelete={onDelete} key={movie.id}/>
    );

    return (
        <div className="movie-layout">
            <h2>All Movies:</h2>
            <div className="movie-tile-container">
                {movieComponents}
            </div>
        </div>
    );

}

export default MovieList;

  