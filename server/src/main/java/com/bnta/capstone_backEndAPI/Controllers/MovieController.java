package com.bnta.capstone_backEndAPI.Controllers;

import com.bnta.capstone_backEndAPI.Models.GenreEnum;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Models.ReviewInputDTO;
import com.bnta.capstone_backEndAPI.Services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable long id) {
        Movie movie = movieService.getMovieById(id);
        if (movie == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie){
        movieService.addMovie(movie);
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movie){
        movie.setId(id);
        Movie updatedMovie = movieService.updateMovie(movie);
        if (updatedMovie == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable("id") Long id) {
        movieService.deleteMovie(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PatchMapping(value = "/{id}/reviews")
    public ResponseEntity<Movie> updateReview(@PathVariable Long id, @RequestBody ReviewInputDTO reviewInputDTO) throws Exception {
        Movie movie = new Movie();
        movie.setId(id);
        movie.setReview(reviewInputDTO.getReview());

        movie = movieService.updateReview(reviewInputDTO, movie);
        if (movie != null){
            return new ResponseEntity<>(movie , HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/genre/{genre}")
    // Declares a public method named getMoviesByGenre that takes a GenreEnum path variable named genre and returns a ResponseEntity object containing a list of Movie objects.
    public ResponseEntity<List<Movie>> getMoviesByGenre(@PathVariable GenreEnum genre) {
        // Declares a new List variable named movies and initializes it with the result of calling the getMoviesByGenre method on the movieService object with the genre variable.
        List<Movie> movies = movieService.getMoviesByGenre(genre);
        // Checks if the movies list is null or empty, and if so, returns a new ResponseEntity object with an HTTP status code of NOT_FOUND (404).
        if (movies == null || movies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        // Returns a new ResponseEntity object containing the movies list and an HTTP status code of OK (200) if the movies list is not null or empty.
        return new ResponseEntity<>(movies, HttpStatus.OK);

    }

    @GetMapping("/random")
    //Declares a public method named getRandomMovies that returns a ResponseEntity object containing a list of Movie objects.
    public ResponseEntity<List<Movie>> getRandomMovies() {
        // Declares a new List variable named movies and initializes it with the result of calling the getRandomMovies method on the movieService object with a count of 5.
        List<Movie> movies = movieService.getRandomMovies(5);
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }




}
