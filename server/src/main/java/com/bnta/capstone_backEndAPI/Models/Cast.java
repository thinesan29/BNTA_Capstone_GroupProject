package com.bnta.capstone_backEndAPI.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "casts")
public class Cast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column
    private Long id;
    @Column
    private String name;

    @Column
    private int age;

    @Column
    private String bio;

    @OneToMany(mappedBy = "cast" , orphanRemoval = true)
    @JsonIgnoreProperties({"cast"})
    private List<MovieCastMember> movieCastMembers;


    private Cast() {
    }

    public Cast(String name, int age, String bio) {
        this.name = name;
        this.age = age;
        this.bio = bio;
//        this.movieCastMembers = movieCastMembers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public List<MovieCastMember> getMovieCastMembers() {
        return movieCastMembers;
    }

    public void setMovieCastMembers(List<MovieCastMember> movieCastMembers) {
        this.movieCastMembers = movieCastMembers;
    }
}
