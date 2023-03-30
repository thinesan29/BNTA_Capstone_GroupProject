import { useState } from "react";

const MovieForm = ({ movies, onSubmit }) => {
  const [addedMovie, setAddedMovie] = useState({
    title: "",
    genre:"",
    duration:0,
    language:"",
    review:"",
    rating:0
  });

  const handleChange = (event) => {
    const inputTitle = event.target.title;
    const copiedMovie = { ...addedMovie };
    copiedMovie[inputTitle] = event.target.value;
    setAddedMovie(copiedMovie);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(addedMovie);
    console.log(addedMovie);
  };

  return (
    <form className="movie-form" onSubmit={handleFormSubmit}>
      <h3>Add a New Moviet</h3>

      <label htmlFor="product-movie">Movie Title:</label>
      <input
        id="movie-name"
        name="title"
        type="text"
        placeholder="Enter Movie Title"
        onChange={handleChange}
      />

      <label htmlFor="movie-genre">Movie Genre:</label>
      <input
        id="movie-genre"
        name="genre"
        type="text"
        placeholder="Enter movie genre"
        onChange={handleChange}
      />

      <label htmlFor="movie-duration">Movie Duration:</label>
      <input
        id="movie-duration"
        name="duration"
        type="number"
        placeholder="Enter Movie Duration"
        onChange={handleChange}
      />

      <label htmlFor="movie-language">Movie Language:</label>
      <input
        id="movie-language"
        name="language"
        type="text"
        placeholder="Enter movie's language"
        onChange={handleChange}
      />

    <label htmlFor="movie-review">Movie Review:</label>
      <input
        id="movie-review"
        name="review"
        type="text"
        placeholder="Enter a movie review"
        onChange={handleChange}
      />

    <label htmlFor="movie-rating">Movie Rating:</label>
      <input
        id="movie-rating"
        name="rating"
        type="number"
        placeholder="Enter a movie rating"
        onChange={handleChange}
      />

      <input type="submit" value="Add Movie" />
    </form>
  );
};

export default MovieForm;