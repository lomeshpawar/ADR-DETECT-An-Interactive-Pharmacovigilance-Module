package com.adrdetect.repository;

import com.adrdetect.entity.ReactionTypeInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactionTypeRepository extends JpaRepository<ReactionTypeInfo, String> {
}
