package com.bnta.capstone_backEndAPI.Controllers;

import com.bnta.capstone_backEndAPI.Models.Cast;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Services.CastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/casts")
public class CastController {
    @Autowired
    CastService castService;

    @GetMapping
    public ResponseEntity<List<Cast>> getAllCasts() {
        List<Cast> casts = castService.getAllCasts();
        return new ResponseEntity<>(casts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cast> getCastById(@PathVariable long id) {
        Cast cast = castService.getCastById(id);
        if (cast == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cast, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Cast> addCast(@RequestBody Cast cast){
        castService.addCast(cast);
        return new ResponseEntity<>(cast, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Cast> updatedCast(@PathVariable Long id, @RequestBody Cast cast){
        cast.setId(id);
        Cast updatedCast = castService.updateCast(cast);
        if (updatedCast == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedCast, HttpStatus.OK);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCast(@PathVariable("id") Long id) {
        castService.deleteCast(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
