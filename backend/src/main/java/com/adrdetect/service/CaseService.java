package com.adrdetect.service;

import com.adrdetect.dto.CaseCreateDTO;
import com.adrdetect.dto.CaseDetailDTO;
import com.adrdetect.dto.CaseSummaryDTO;
import com.adrdetect.entity.*;
import com.adrdetect.enums.ClueCategory;
import com.adrdetect.enums.Difficulty;
import com.adrdetect.exception.ResourceNotFoundException;
import com.adrdetect.repository.CaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CaseService {
    private final CaseRepository caseRepository;

    public List<CaseSummaryDTO> getAllCases() {
        return caseRepository.findAll().stream()
                .map(this::toSummaryDTO)
                .collect(Collectors.toList());
    }

    public CaseDetailDTO getCaseById(Long id) {
        Case c = caseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Case not found with id: " + id));
        return toDetailDTO(c);
    }

    @Transactional
    public CaseDetailDTO createCase(CaseCreateDTO dto) {
        long count = caseRepository.count() + 1;
        String caseNumber = String.format("CASE-%02d", count);

        Case newCase = Case.builder()
                .caseNumber(caseNumber)
                .title(dto.getTitle())
                .difficulty(dto.getDifficulty() != null ? dto.getDifficulty() : Difficulty.MEDIUM)
                .category(dto.getCategory() != null ? dto.getCategory() : "Pharmacology & Safety")
                .summary(dto.getSummary())
                .suspectedDrug(dto.getSuspectedDrug())
                .reactionName(dto.getReactionName())
                .reactionTypeCode(dto.getReactionTypeCode())
                .severity(dto.getSeverity())
                .causality(dto.getCausality())
                .correctInterventions(dto.getCorrectInterventions() != null ? String.join(",", dto.getCorrectInterventions()) : "STOP_DRUG,MONITOR_PATIENT")
                .outcome(dto.getOutcome() != null ? dto.getOutcome() : "Recovered")
                .dechallengeInfo(dto.getDechallengeInfo())
                .rechallengeInfo(dto.getRechallengeInfo())
                .clinicalExplanation(dto.getClinicalExplanation())
                .learningPoints(dto.getLearningPoints())
                .medications(new ArrayList<>())
                .clues(new ArrayList<>())
                .symptoms(new ArrayList<>())
                .build();

        // Attach Patient
        Patient patient = Patient.builder()
                .caseEntity(newCase)
                .name(dto.getPatientName())
                .age(dto.getPatientAge() != null ? dto.getPatientAge() : 45)
                .gender(dto.getPatientGender() != null ? dto.getPatientGender() : "Male")
                .weight(dto.getPatientWeight())
                .diagnosis(dto.getDiagnosis())
                .chiefComplaints(dto.getChiefComplaints())
                .build();
        newCase.setPatient(patient);

        // Attach Medications
        if (dto.getMedications() != null) {
            for (var m : dto.getMedications()) {
                Medication med = Medication.builder()
                        .caseEntity(newCase)
                        .name(m.getName())
                        .dose(m.getDose())
                        .frequency(m.getFrequency())
                        .route(m.getRoute() != null ? m.getRoute() : "Oral")
                        .startDay(m.getStartDay())
                        .indication(m.getIndication())
                        .isSuspected(m.getIsSuspected() != null && m.getIsSuspected())
                        .build();
                newCase.getMedications().add(med);
            }
        }

        // Attach Clues
        if (dto.getClues() != null) {
            for (var cl : dto.getClues()) {
                ClueCategory cat;
                try {
                    cat = ClueCategory.valueOf(cl.getCategory());
                } catch (Exception e) {
                    cat = ClueCategory.MEDICINE_HISTORY;
                }
                Clue clue = Clue.builder()
                        .caseEntity(newCase)
                        .category(cat)
                        .title(cl.getTitle())
                        .content(cl.getContent())
                        .icon(cl.getIcon() != null ? cl.getIcon() : "Activity")
                        .sortOrder(cl.getSortOrder() != null ? cl.getSortOrder() : 1)
                        .build();
                newCase.getClues().add(clue);
            }
        }

        // Attach Symptoms
        if (dto.getSymptoms() != null) {
            for (var s : dto.getSymptoms()) {
                Symptom sym = Symptom.builder()
                        .caseEntity(newCase)
                        .dayOnset(s.getDayOnset())
                        .description(s.getDescription())
                        .severity(s.getSeverity())
                        .build();
                newCase.getSymptoms().add(sym);
            }
        }

        Case saved = caseRepository.save(newCase);
        return toDetailDTO(saved);
    }

    @Transactional
    public void deleteCase(Long id) {
        if (!caseRepository.existsById(id)) {
            throw new ResourceNotFoundException("Case not found with id: " + id);
        }
        caseRepository.deleteById(id);
    }

    private CaseSummaryDTO toSummaryDTO(Case c) {
        return CaseSummaryDTO.builder()
                .id(c.getId())
                .caseNumber(c.getCaseNumber())
                .title(c.getTitle())
                .difficulty(c.getDifficulty())
                .category(c.getCategory())
                .summary(c.getSummary())
                .patientName(c.getPatient() != null ? c.getPatient().getName() : "Unknown")
                .patientAge(c.getPatient() != null ? c.getPatient().getAge() : null)
                .patientGender(c.getPatient() != null ? c.getPatient().getGender() : "Unknown")
                .build();
    }

    private CaseDetailDTO toDetailDTO(Case c) {
        return CaseDetailDTO.builder()
                .id(c.getId())
                .caseNumber(c.getCaseNumber())
                .title(c.getTitle())
                .difficulty(c.getDifficulty())
                .category(c.getCategory())
                .summary(c.getSummary())
                .patient(c.getPatient())
                .medications(c.getMedications())
                .clues(c.getClues())
                .symptoms(c.getSymptoms())
                .dechallengeInfo(c.getDechallengeInfo())
                .rechallengeInfo(c.getRechallengeInfo())
                .build();
    }
}
