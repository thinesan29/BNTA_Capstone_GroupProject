import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActionPage = () => {
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
        fetch("http://localhost:8080/movies/genre/ACTION")
          .then(response => response.json())
          .then(data => setMovies(data));
      }
    
      useEffect(loadMovieData, []);
    
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    
      return (
        <div className="action-container">
          <Slider {...sliderSettings}>
            {movies.map(movie => (
              <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img id="image" src={pics[`${movie.title}.jpg`]} alt={movie.title} />
                <p>Movie Duration (mins): {movie.duration}</p>
                <p>Movie Review: {movie.review}</p>
                <p>Movie Rating: {movie.rating}</p>
                <p>Movie Language: {movie.language}</p>
                <p>Movie Genre: {movie.genre}</p>
              </div>
            ))}
          </Slider>
        </div>
      )
}

export default ActionPage;