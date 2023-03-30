package com.bnta.capstone_backEndAPI.Repositories;

import com.bnta.capstone_backEndAPI.Models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository <Movie, Long> {
    List<Movie> findByTitle(String title);
    List<Movie> findByGenre(String genre);

    List<Movie> findByLanguage(String language);

    List<Movie> findByWatchList(Boolean watchList);
}