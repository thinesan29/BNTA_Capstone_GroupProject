import Movie from "./Movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewMoviesSlider = ({ movies, deleteMovie, addToWatchList}) => {
  
    const newMovies = getRandomSubarray(movies, 5);

  //https://stackoverflow.com/a/11935263

  // getting random subset from larger array
  function getRandomSubarray(arr, size) {
    // if array is smaller or equal size to number given, give back array
    if (arr.length <= size) return arr;
    // variable declaration line, shuffled is copy of array given, i is length of given array,
    // min = length - size, temp is a temporary variable for storing a value mid algorithm (for comparison purposes),
    // index is the index
    var shuffled = [...arr],
      i = arr.length,
      min = i - size,
      temp,
      index;
    // while loop - for loop that changes something
    // i-- function that returns a value, compares i to min (min tells you how
    // many times to loop over array)
    while (i-- > min) {
      // every time it loops, get a random item in array (number between 0 and i-1)
      index = Math.floor((i + 1) * Math.random());
      // assign it to temp
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    // takes the length - min(th) values
    // if min was 0 would take all in array, if min was 1, it would take all but the 1st(0th) value
    return shuffled.slice(min);
  }

  //configures the behaviour of the slider
  const settings = {
    className: "react__slick__slider__parent",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="new-movie">
      <h2>New added Movies</h2>
      <p>Watch recently arrived movies!</p>
      <Slider {...settings}>
        {newMovies.map(movie => {
        return <Movie key={movie.movieId} movie={movie} deleteMovie={deleteMovie} addToWatchList={addToWatchList}/>
    })}
      </Slider>
    </div>
  );
};

export default NewMoviesSlider;