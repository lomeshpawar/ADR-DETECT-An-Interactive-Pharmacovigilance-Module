package com.adrdetect.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "adr_reports")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ADRReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "case_id", nullable = false)
    private Long caseId;

    @Column(name = "patient_initials", length = 20)
    private String patientInitials;

    @Column(name = "age")
    private Integer age;

    @Column(name = "gender", length = 20)
    private String gender;

    @Column(name = "suspected_drug", nullable = false, length = 100)
    private String suspectedDrug;

    @Column(name = "reaction", nullable = false, length = 200)
    private String reaction;

    @Column(name = "date_of_onset", length = 50)
    private String dateOfOnset;

    @Column(name = "severity", length = 50)
    private String severity;

    @Column(name = "causality", length = 50)
    private String causality;

    @Column(name = "action_taken", length = 200)
    private String actionTaken;

    @Column(name = "outcome", length = 100)
    private String outcome;

    @Column(name = "reporter_name", length = 100)
    private String reporterName;

    @Column(name = "reporter_type", length = 100)
    private String reporterType;

    @Column(name = "submitted_at")
    private LocalDateTime submittedAt;

    @PrePersist
    public void prePersist() {
        if (submittedAt == null) {
            submittedAt = LocalDateTime.now();
        }
    }
}
