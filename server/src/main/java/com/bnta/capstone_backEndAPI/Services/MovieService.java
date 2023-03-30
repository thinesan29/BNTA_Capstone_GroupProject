package com.bnta.capstone_backEndAPI.Services;

import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Models.ReviewInputDTO;
import com.bnta.capstone_backEndAPI.Repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public List<Movie> findByGenre(String genre){
        List<Movie> genres = movieRepository.findByGenre(genre);
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













}
