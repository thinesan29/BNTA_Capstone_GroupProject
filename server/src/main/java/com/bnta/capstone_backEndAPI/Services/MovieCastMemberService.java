package com.bnta.capstone_backEndAPI.Services;

import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import com.bnta.capstone_backEndAPI.Models.ReviewInputDTO;
import com.bnta.capstone_backEndAPI.Repositories.MovieCastMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MovieCastMemberService {

    @Autowired
    private MovieCastMemberRepository movieCastMemberRepository;

    // The getStatusById() method retrieves a single status by its ID using the findById() method of the StatusRepository.

    public MovieCastMember getMovieCastMemberById(Long id){
        return movieCastMemberRepository.findById(id).orElse(null);
    }

    public List<MovieCastMember> getAllMovieCastMember() {
        return movieCastMemberRepository.findAll();
    }

    public MovieCastMember addMovieCastMember(MovieCastMember movieCastMember){
        return movieCastMemberRepository.save(movieCastMember);
    }

    public MovieCastMember updateMovieCastMember(Long id, MovieCastMember movieCastMember){
        MovieCastMember existingMovieCastMember = getMovieCastMemberById(id);
        if (existingMovieCastMember != null) {
            existingMovieCastMember.setMovie(movieCastMember.getMovie());
            existingMovieCastMember.setCast(movieCastMember.getCast());
            return movieCastMemberRepository.save(existingMovieCastMember);
        } else {
            return null;
        }
    }

    public boolean deleteMovieCastMember(Long id){
        MovieCastMember existingMovieCastMember = getMovieCastMemberById(id);
        if (existingMovieCastMember != null) {
            movieCastMemberRepository.delete(existingMovieCastMember);
            return true;
        } else {
            return false;
        }
    }


}
