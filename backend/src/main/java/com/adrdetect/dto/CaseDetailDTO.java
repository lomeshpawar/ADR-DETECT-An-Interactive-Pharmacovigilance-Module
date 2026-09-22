package com.adrdetect.dto;

import com.adrdetect.entity.Clue;
import com.adrdetect.entity.Medication;
import com.adrdetect.entity.Patient;
import com.adrdetect.entity.Symptom;
import com.adrdetect.enums.Difficulty;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CaseDetailDTO {
    private Long id;
    private String caseNumber;
    private String title;
    private Difficulty difficulty;
    private String category;
    private String summary;
    private Patient patient;
    private List<Medication> medications;
    private List<Clue> clues;
    private List<Symptom> symptoms;
    private String dechallengeInfo;
    private String rechallengeInfo;
}
