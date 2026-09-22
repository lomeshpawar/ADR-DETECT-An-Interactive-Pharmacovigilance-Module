package com.adrdetect.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "scores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "case_id", nullable = false)
    private Long caseId;

    @Column(name = "user_id", length = 100)
    private String userId;

    @Column(name = "suspected_drug_score")
    private Integer suspectedDrugScore;

    @Column(name = "reaction_score")
    private Integer reactionScore;

    @Column(name = "reaction_type_score")
    private Integer reactionTypeScore;

    @Column(name = "severity_score")
    private Integer severityScore;

    @Column(name = "causality_score")
    private Integer causalityScore;

    @Column(name = "intervention_score")
    private Integer interventionScore;

    @Column(name = "reporting_score")
    private Integer reportingScore;

    @Column(name = "total_score")
    private Integer totalScore;

    @Column(name = "max_score")
    private Integer maxScore;

    @Column(name = "percentage")
    private Double percentage;

    @Column(name = "stars")
    private Integer stars;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }
}
