package com.adrdetect.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "medications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Medication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "case_id", nullable = false)
    @JsonBackReference
    private Case caseEntity;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "dose", length = 50)
    private String dose;

    @Column(name = "frequency", length = 50)
    private String frequency;

    @Column(name = "route", length = 50)
    private String route;

    @Column(name = "start_day", length = 50)
    private String startDay;

    @Column(name = "indication", length = 200)
    private String indication;

    @Column(name = "is_suspected")
    private Boolean isSuspected;
}
