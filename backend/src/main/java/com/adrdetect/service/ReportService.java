package com.adrdetect.service;

import com.adrdetect.dto.ReportRequest;
import com.adrdetect.entity.ADRReport;
import com.adrdetect.exception.ResourceNotFoundException;
import com.adrdetect.repository.ADRReportRepository;
import com.adrdetect.repository.CaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ADRReportRepository reportRepository;
    private final CaseRepository caseRepository;

    @Transactional
    public ADRReport submitReport(ReportRequest request) {
        if (!caseRepository.existsById(request.getCaseId())) {
            throw new ResourceNotFoundException("Case not found with id: " + request.getCaseId());
        }

        ADRReport report = ADRReport.builder()
                .caseId(request.getCaseId())
                .patientInitials(request.getPatientInitials())
                .age(request.getAge())
                .gender(request.getGender())
                .suspectedDrug(request.getSuspectedDrug())
                .reaction(request.getReaction())
                .dateOfOnset(request.getDateOfOnset())
                .severity(request.getSeverity())
                .causality(request.getCausality())
                .actionTaken(request.getActionTaken())
                .outcome(request.getOutcome())
                .reporterName(request.getReporterName())
                .reporterType(request.getReporterType() != null ? request.getReporterType() : "Pharmacist")
                .build();

        return reportRepository.save(report);
    }

    @Transactional(readOnly = true)
    public ADRReport getReportById(Long id) {
        return reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("ADR Report not found with id: " + id));
    }
}
