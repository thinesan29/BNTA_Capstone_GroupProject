package com.bnta.capstone_backEndAPI.Services;

import com.bnta.capstone_backEndAPI.Models.GenreEnum;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Models.ReviewInputDTO;
import com.bnta.capstone_backEndAPI.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> getAllMovies() {
        return movieRepository.findAll(); // do this Tuesday morning
    }
    public Movie getMovieById(long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movie.orElse(null); // ask about this
    }
    public Movie updateMovie(Movie movie) {
        Optional<Movie> existingBook = movieRepository.findById(movie.getId());
        if (existingBook.isPresent()){
            return movieRepository.save(movie);
        } else {
            return null;
        }
    }
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }
    public void deleteMovie(Long id) {movieRepository.deleteById(id);}

    // repo methods
    public List<Movie> findByTitle(String title){
        List<Movie> titles = movieRepository.findByTitle(title);
        return titles;
    }

    // Declares a public method named getMoviesByGenre that takes a GenreEnum parameter named genre and returns a list of Movie objects.
    public List<Movie> getMoviesByGenre(GenreEnum genre){
        //Declares a new List variable named genres and initializes it with the result of calling the findByGenre method on the movieRepository object with the genre parameter.
        List<Movie> genres = movieRepository.findByGenre(genre);
        // Returns the genres list, which contains all the movies with the specified genre.
        return genres;
    }

    public List<Movie> findByLanguage(String language){
        List<Movie> languages = movieRepository.findByLanguage(language);
        return languages;
    }

// ask trainer to check this
    public List<Movie> findByWatchList(Boolean watchList){
        List<Movie> watchLists = movieRepository.findByWatchList(watchList);
        return watchLists;
    }

    public Movie updateReview(ReviewInputDTO reviewInputDTO, Movie movie) throws Exception {
        Movie existingMovie = getMovieById(movie.getId());
        return movieRepository.save(existingMovie);
    }

    // Gets Random Movies from the DataLoader
    // Declares a public method named getRandomMovies that takes an integer parameter count and returns a list of Movie objects.
    public List<Movie> getRandomMovies(int count) {
        // Retrieves all movies from a repository and initializes a new List variable named allMovies.
        List<Movie> allMovies = movieRepository.findAll();
        // Shuffles the order of the elements in the allMovies list randomly.
        Collections.shuffle(allMovies);
        // Returns a new list of Movie objects with the first count elements from the shuffled allMovies list, using the Java 8 Stream API.
        return allMovies.stream().limit(count).collect(Collectors.toList());

    }

}
