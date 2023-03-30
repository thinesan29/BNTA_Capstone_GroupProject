package com.bnta.capstone_backEndAPI.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "movieCastMembers")
public class MovieCastMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false)
    @JsonIgnoreProperties({"movieCastMember"})
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "cast_id", nullable = false)
    @JsonIgnoreProperties({"movieCastMember"})
    private Cast cast;


    public MovieCastMember(Cast cast, Movie movie) {
        this.cast = cast;
        this.movie = movie;
    }

    public MovieCastMember() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Cast getCast() {
        return cast;
    }

    public void setCast(Cast cast) {
        this.cast = cast;
    }

}
