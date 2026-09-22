package com.adrdetect.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReportRequest {
    @NotNull(message = "Case ID is required")
    private Long caseId;

    private String patientInitials;
    private Integer age;
    private String gender;

    @NotBlank(message = "Suspected drug is required")
    private String suspectedDrug;

    @NotBlank(message = "Reaction description is required")
    private String reaction;

    private String dateOfOnset;
    private String severity;
    private String causality;
    private String actionTaken;
    private String outcome;

    @NotBlank(message = "Reporter name is required")
    private String reporterName;

    private String reporterType;
}
