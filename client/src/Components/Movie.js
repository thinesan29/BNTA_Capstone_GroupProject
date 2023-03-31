
const Movie = ({movie,onDelete}) => {
    return (
        <div className="movie">
            <h3>{movie.title}</h3>
            <p>Movie Duration (mins): {movie.duration}</p>
            <p>Movie Review: {movie.review}</p>
            <p>Movie Rating: {movie.rating}</p>
            <p>Movie Language: {movie.language}</p>
            <p>Movie Genre: {movie.genre}</p>

            <button onClick={() => onDelete(movie.id)}>Remove Movie</button>
        </div>
    )


}

export default Movie;