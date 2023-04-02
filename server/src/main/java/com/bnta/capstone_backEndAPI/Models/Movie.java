package com.bnta.capstone_backEndAPI.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "movies")
public class Movie {
    // Properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private String title;
    @Column
    private int duration;
    @Column
    private boolean watchList;

    @Column
    private String review;

    @Column
    private int rating;

    @Column
    private String trailer;

    @Enumerated(EnumType.STRING)
    private LanguageEnum language;

    @Enumerated(EnumType.STRING)
    private GenreEnum genre;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnoreProperties("movie")
    private List<MovieCastMember> movieCastMember;

    // Constructor
    public Movie(String title, int duration, LanguageEnum language , GenreEnum genre, String review, int rating, String trailer) {
        this.title = title;
        this.duration = duration;
//        this.movieCastMember = movieCastMember;
        this.watchList = false;
        this.language = language;
        this.genre = genre;
        this.review = review;
        this.rating = rating;
        this.trailer = trailer;

    }

    // Default Constructor
    public Movie(){

   }
// Getters & Setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public List<MovieCastMember> getMovieCastMember() {
        return movieCastMember;
    }

    public void setMovieCastMember(List<MovieCastMember> movieCastMember) {
        this.movieCastMember = movieCastMember;
    }

    public boolean isWatchList() {
        return watchList;
    }

    public void setWatchList(boolean watchList) {
        this.watchList = watchList;
    }

    public LanguageEnum getLanguage() {
        return language;
    }

    public void setLanguage(LanguageEnum language) {
        this.language = language;
    }

    public GenreEnum getGenre() {
        return genre;
    }

    public void setGenre(GenreEnum genre) {
        this.genre = genre;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }
}
