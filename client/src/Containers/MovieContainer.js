import { useState, useEffect } from "react";
import MovieForm from "../Components/MovieForm";
import MovieList from "../Components/MovieList";

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);

    const loadMovieData = () => {
        fetch("http://localhost:8080/movies")
            .then(response => response.json())
            .then(data => setMovies(data));
    }

    const submitNewMovie = (newMovie) => {
        fetch("http://localhost:8080/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        })
            .then(loadMovieData);
    }

    const removeMovie = (id) => {
        fetch(`http://localhost:8080/movies/${id}`, {
            method: "DELETE"
        })
            .then(loadMovieData);
    }

    useEffect(loadMovieData, []);

    return(
        <div className="grid-container">
            <MovieForm onMovieSubmission={submitNewMovie}/>
            <MovieList movies={movies} onDelete={removeMovie}/>
        </div>
    )

}

export default MovieContainer;