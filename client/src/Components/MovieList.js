import Movie from "./Movie";

const MovieList = ({movies, deleteMovie, addToWatchlist}) => {
    const movieComponents = movies.map(movie => {
        return <Movie key={movie.movieId} movie={movie} deleteMovie={deleteMovie} addToWatchList={addToWatchlist}/>
    })
    return(
        <>{movieComponents}</>
    )
}

export default MovieList;