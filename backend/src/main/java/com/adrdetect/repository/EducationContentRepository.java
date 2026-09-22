package com.adrdetect.repository;

import com.adrdetect.entity.EducationContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EducationContentRepository extends JpaRepository<EducationContent, Long> {
    Optional<EducationContent> findBySlug(String slug);
}
