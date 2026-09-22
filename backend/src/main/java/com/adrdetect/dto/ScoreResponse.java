package com.adrdetect.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScoreResponse {
    private Long id;
    private Long caseId;
    private String caseTitle;
    private String userId;
    private int totalScore;
    private int maxScore;
    private double percentage;
    private int stars;
    private LocalDateTime createdAt;
}
