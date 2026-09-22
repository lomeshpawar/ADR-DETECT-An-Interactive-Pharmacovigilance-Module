package com.adrdetect.dto;

import com.adrdetect.enums.Difficulty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CaseSummaryDTO {
    private Long id;
    private String caseNumber;
    private String title;
    private Difficulty difficulty;
    private String category;
    private String summary;
    private String patientName;
    private Integer patientAge;
    private String patientGender;
}
