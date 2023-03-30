package com.bnta.capstone_backEndAPI.Services;

import com.bnta.capstone_backEndAPI.Models.Cast;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Repositories.CastRepository;
import com.bnta.capstone_backEndAPI.Repositories.MovieRepository;
import jakarta.persistence.Column;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CastService {
    @Autowired
    private CastRepository castRepository;
    public List<Cast> getAllCasts() {
        return castRepository.findAll(); // do this Tuesday morning
    }
    public Cast getCastById(long id) {
        Optional<Cast> cast = castRepository.findById(id);
        return cast.orElse(null); // ask about this
    }
    public Cast updateCast(Cast cast) {
        Optional<Cast> existingBook = castRepository.findById(cast.getId());
        if (existingBook.isPresent()){
            return castRepository.save(cast);
        } else {
            return null;
        }
    }
    public Cast addCast(Cast cast) {
        return castRepository.save(cast);
    }
    public void deleteCast(Long id) {castRepository.deleteById(id);}

    // repo methods
    public List<Cast> findByName(String name){
        List<Cast> names = castRepository.findByName(name);
        return names;
    }

}

