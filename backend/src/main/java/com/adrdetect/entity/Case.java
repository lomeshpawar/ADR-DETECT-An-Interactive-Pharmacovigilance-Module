package com.adrdetect.entity;

import com.adrdetect.enums.Causality;
import com.adrdetect.enums.Difficulty;
import com.adrdetect.enums.ReactionType;
import com.adrdetect.enums.Severity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cases")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Case {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "case_number", unique = true, nullable = false, length = 20)
    private String caseNumber; // e.g. CASE-01

    @Column(name = "title", nullable = false, length = 200)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(name = "difficulty", length = 20)
    private Difficulty difficulty;

    @Column(name = "category", length = 100)
    private String category;

    @Column(name = "summary", length = 1000)
    private String summary;

    @OneToOne(mappedBy = "caseEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Patient patient;

    @OneToMany(mappedBy = "caseEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @Builder.Default
    private List<Medication> medications = new ArrayList<>();

    @OneToMany(mappedBy = "caseEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @Builder.Default
    private List<Clue> clues = new ArrayList<>();

    @OneToMany(mappedBy = "caseEntity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @Builder.Default
    private List<Symptom> symptoms = new ArrayList<>();

    // Expected Answers for Evaluation
    @Column(name = "suspected_drug", nullable = false, length = 100)
    private String suspectedDrug;

    @Column(name = "reaction_name", nullable = false, length = 200)
    private String reactionName;

    @Enumerated(EnumType.STRING)
    @Column(name = "reaction_type_code", length = 5)
    private ReactionType reactionTypeCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "severity", length = 20)
    private Severity severity;

    @Enumerated(EnumType.STRING)
    @Column(name = "causality", length = 50)
    private Causality causality;

    // Comma-separated intervention codes e.g. "STOP_DRUG,SYMPTOMATIC_TREATMENT,MONITOR_PATIENT"
    @Column(name = "correct_interventions", length = 500)
    private String correctInterventions;

    @Column(name = "outcome", length = 100)
    private String outcome;

    @Column(name = "dechallenge_info", length = 1000)
    private String dechallengeInfo;

    @Column(name = "rechallenge_info", length = 1000)
    private String rechallengeInfo;

    @Column(name = "clinical_explanation", length = 2000)
    private String clinicalExplanation;

    @Column(name = "learning_points", length = 2000)
    private String learningPoints;
}
