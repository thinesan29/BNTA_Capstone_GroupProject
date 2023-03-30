import MovieList from "./MovieList";

const TopRated = ({ movies, deleteMovie, addToWatchList}) => {
  return (
    <div className="movies-div">
      <h2>Our Top Rated Movies</h2>
      <p>Take a look at our top rated movies!</p>
      <div className="movies">
        <MovieList
          key={"toprated"}
          movies={movies}
          deleteMovie={deleteMovie}
          addToWatchList={addToWatchList}
        />
      </div>
    </div>
  );
};
export default TopRated;