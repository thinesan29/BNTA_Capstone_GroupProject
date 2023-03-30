package com.bnta.capstone_backEndAPI.Controllers;

import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Models.ReviewInputDTO;
import com.bnta.capstone_backEndAPI.Services.MovieCastMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movieCastMember")
public class MovieCastMemberController {
    @Autowired
    private MovieCastMemberService movieCastMemberService;

    //get all owned books - method
    @GetMapping
    public ResponseEntity<List<MovieCastMember>> getAllMovieCastMember(){
        List <MovieCastMember> movieCastMember = movieCastMemberService.getAllMovieCastMember();
        if (!movieCastMember.isEmpty()){
            return new ResponseEntity<>(movieCastMember, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MovieCastMember> getMovieCastMemberById(@PathVariable Long id){
        MovieCastMember movieCastMember = movieCastMemberService.getMovieCastMemberById(id);
        if (movieCastMember != null) {
            return new ResponseEntity<>(movieCastMember, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    //create status method?

    @PostMapping
    public ResponseEntity<MovieCastMember> createMovieCastMember(@RequestBody MovieCastMember movieCastMember){
        movieCastMember = movieCastMemberService.addMovieCastMember(movieCastMember);
        if (movieCastMember != null) {
            return new ResponseEntity<>(movieCastMember, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<MovieCastMember> updateMovieCastMember(@PathVariable Long id, @RequestBody MovieCastMember movieCastMember){
        movieCastMember = movieCastMemberService.updateMovieCastMember(id, movieCastMember);
        if (movieCastMember != null) {
            return new ResponseEntity<>(movieCastMember, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovieCastMember(@PathVariable Long id){
        boolean isDeleted = movieCastMemberService.deleteMovieCastMember(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
