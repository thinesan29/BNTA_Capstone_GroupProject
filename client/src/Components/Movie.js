const Movie = ({movie, deleteMovie, addToWatchList}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }

      const handleAddToWatchList = () => {
        addToWatchList(movie);
      };
      
      const pics = importAll(require.context('../pics', false, /\.(png|jpeg|svg)$/));
    return(
        <div className="movie-card">
            <img id="image" src={pics[`${movie.title}.jpeg`]} alt={movie.title}/>
            <h4><strong>Movie: </strong>{movie.title}</h4>
            <p><strong>Genre: </strong>{movie.genre}</p>
            <p><strong>Duration: </strong>{movie.duration}</p>
            <p><strong>Language: </strong>{movie.language}</p>
            <p><strong>Review: </strong>{movie.review}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
            <p><strong>Watch List: </strong>{movie.watchList}</p>
            <button className="add" onClick={handleAddToWatchList}>Add to Watch List</button>
            <button className="delete" onClick={()=> deleteMovie(movie.movieId)}>Delete</button>
        </div>
    )
}

export default Movie;