package com.adrdetect.repository;

import com.adrdetect.entity.ADRReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ADRReportRepository extends JpaRepository<ADRReport, Long> {
    List<ADRReport> findByCaseId(Long caseId);
}
