package com.adrdetect.repository;

import com.adrdetect.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {
    List<Score> findByUserIdOrderByCreatedAtDesc(String userId);
    List<Score> findByCaseId(Long caseId);
}
