package com.adrdetect.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "reaction_type_info")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReactionTypeInfo {
    @Id
    @Column(name = "code", length = 5)
    private String code; // A, B, C, D, E, F

    @Column(name = "name", nullable = false, length = 100)
    private String name; // e.g. Augmented, Bizarre, Chronic, Delayed, End of use, Failure

    @Column(name = "mnemonic", length = 50)
    private String mnemonic;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "mechanism", length = 1000)
    private String mechanism;

    @Column(name = "clinical_examples", length = 1000)
    private String clinicalExamples;
}
