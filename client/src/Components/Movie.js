
const Movie = ({movie,onDelete}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      const pics = importAll(require.context('../pics/Movie', false, /\.(png|jpg|svg)$/));
    return (
        <div className="movie">
            <img id="image" src={pics[`${movie.title}.jpg`]} alt={movie.title}/>
            <br/>
            <br/>
            <h3>{movie.title}</h3>
            <p>Movie Duration (mins): {movie.duration}</p>
            <p>Movie Review: {movie.review}</p>
            <p>Movie Rating: {movie.rating}</p>
            <p>Movie Language: {movie.language}</p>
            <p>Movie Genre: {movie.genre}</p>
            <p>Actor 1: {movie.movieCastMember[0].cast.name}</p>
            {movie.movieCastMember.length >= 2 && <p>Actor 2: {movie.movieCastMember[1].cast.name}</p>}


            <button onClick={() => onDelete(movie.id)}>Remove Movie</button>
        </div>
    )


}

export default Movie;