package com.adrdetect.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserStatsDTO {
    private int casesCompleted;
    private int totalCases;
    private double averageScore;
    private int bestScore;
    private List<String> badges;
    private List<ScoreResponse> recentScores;
}
