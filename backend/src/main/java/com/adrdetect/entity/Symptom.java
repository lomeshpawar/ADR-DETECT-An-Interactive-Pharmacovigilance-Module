package com.adrdetect.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "symptoms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Symptom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id", nullable = false)
    @JsonBackReference
    private Case caseEntity;

    @Column(name = "day_onset", length = 50)
    private String dayOnset;

    @Column(name = "description", nullable = false, length = 200)
    private String description;

    @Column(name = "severity", length = 50)
    private String severity;
}
