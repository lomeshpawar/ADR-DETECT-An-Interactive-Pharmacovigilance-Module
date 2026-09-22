package com.adrdetect.dto;

import com.adrdetect.enums.Causality;
import com.adrdetect.enums.Difficulty;
import com.adrdetect.enums.ReactionType;
import com.adrdetect.enums.Severity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CaseCreateDTO {
    @NotBlank(message = "Case title is required")
    private String title;

    private Difficulty difficulty;
    private String category;
    private String summary;

    // Patient info
    @NotBlank(message = "Patient name is required")
    private String patientName;
    private Integer patientAge;
    private String patientGender;
    private Double patientWeight;
    private String diagnosis;
    private String chiefComplaints;

    // Medications
    private List<MedicationDTO> medications;

    // Clues
    private List<ClueDTO> clues;

    // Symptoms
    private List<SymptomDTO> symptoms;

    // Expected Answers
    @NotBlank(message = "Suspected drug is required")
    private String suspectedDrug;

    @NotBlank(message = "Reaction name is required")
    private String reactionName;

    @NotNull(message = "Reaction type (A-F) is required")
    private ReactionType reactionTypeCode;

    @NotNull(message = "Severity is required")
    private Severity severity;

    @NotNull(message = "Causality is required")
    private Causality causality;

    private List<String> correctInterventions;
    private String outcome;
    private String dechallengeInfo;
    private String rechallengeInfo;
    private String clinicalExplanation;
    private String learningPoints;

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class MedicationDTO {
        private String name;
        private String dose;
        private String frequency;
        private String route;
        private String startDay;
        private String indication;
        private Boolean isSuspected;
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class ClueDTO {
        private String category;
        private String title;
        private String content;
        private String icon;
        private Integer sortOrder;
    }

    @Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
    public static class SymptomDTO {
        private String dayOnset;
        private String description;
        private String severity;
    }
}
