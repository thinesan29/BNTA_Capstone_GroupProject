import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const OriginalsPage = ({}) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
const pics = importAll(require.context('../pics/Movie', false, /\.(png|jpg|svg)$/));

  
  const [movies, setMovies] = useState([]);

  const loadMovieData = () => {
    fetch("http://localhost:8080/movies/genre/ORIGINALS")
      .then(response => response.json())
      .then(data => setMovies(data));
  }

  useEffect(loadMovieData, []);

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots-custom",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

   // Trailer Button Function 
   const [showTrailer, setShowTrailer] = useState(false); // initialize state to false
   const handleTrailerVideo = () => {
     setShowTrailer(!showTrailer); // toggle state on button click
   }

   // Movie Detail Button 
   const [showMovieDetails, setShowMovieDetails] = useState(false);
   const handleMovieDetails = () => {
    setShowMovieDetails(!showMovieDetails); // toggle state on button click
  }

  return (
    <div className="originals-container">
      <h2>Blockbuster Originals Movies</h2>
      <Slider {...sliderSettings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <center>
            <img id="image" src={pics[`${movie.title}.jpg`]} alt={movie.title} />
            <br/>
            <h2>{movie.title}</h2>
            <hr/>
            {showMovieDetails && (
              <div>
            <p>Movie Duration (mins): {movie.duration}</p>
            <p>Movie Review: {movie.review}</p>
            <p>Movie Rating: {movie.rating}</p>
            <p>Movie Language: {movie.language}</p>
            <p>Movie Genre: {movie.genre}</p>
            <hr/>
            <h3>Cast 1</h3>
            <p> Name: {movie.movieCastMember[0].cast.name}</p>
            <p> Age: {movie.movieCastMember[0].cast.age}</p>
            <p>Actor's Bio: <br/>{movie.movieCastMember[0].cast.bio}</p>
            <hr/>
            <h3>Cast 2</h3>
            {movie.movieCastMember.length >= 2 && <p>Name: {movie.movieCastMember[1].cast.name}</p>}
            {movie.movieCastMember.length >= 2 && <p>Age: {movie.movieCastMember[1].cast.age}</p>}
            {movie.movieCastMember.length >= 2 && <p>Bio: {movie.movieCastMember[1].cast.bio}</p>}
            <hr/>
            </div>
            )}
            {showTrailer && (
            <iframe
              src={`${movie.trailer}`}
              title="YouTube video"
              allowFullScreen
              height="200"
              width="400"
            ></iframe>
          )}
          <button onClick={handleMovieDetails}>
            {showMovieDetails ? "Hide Movie Details" : "View Movie Details"}
          </button>
          <br/>
          <br/>
         <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
        </center>
          </div>
        ))}
      </Slider>
    </div>
  )
   
};

export default OriginalsPage;
