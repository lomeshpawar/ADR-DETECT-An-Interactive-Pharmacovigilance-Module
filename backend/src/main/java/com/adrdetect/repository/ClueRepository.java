package com.adrdetect.repository;

import com.adrdetect.entity.Clue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClueRepository extends JpaRepository<Clue, Long> {
    List<Clue> findByCaseEntityIdOrderBySortOrderAsc(Long caseId);
}
