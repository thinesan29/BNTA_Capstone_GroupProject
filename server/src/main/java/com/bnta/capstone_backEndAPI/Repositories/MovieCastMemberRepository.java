package com.bnta.capstone_backEndAPI.Repositories;
import com.bnta.capstone_backEndAPI.Models.Cast;
import com.bnta.capstone_backEndAPI.Models.Movie;
import com.bnta.capstone_backEndAPI.Models.MovieCastMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieCastMemberRepository extends JpaRepository<MovieCastMember, Long>  {

}











