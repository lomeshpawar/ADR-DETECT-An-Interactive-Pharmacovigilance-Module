package com.adrdetect.service;

import com.adrdetect.dto.ScoreResponse;
import com.adrdetect.dto.UserStatsDTO;
import com.adrdetect.entity.Case;
import com.adrdetect.entity.Score;
import com.adrdetect.repository.CaseRepository;
import com.adrdetect.repository.ScoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScoreService {
    private final ScoreRepository scoreRepository;
    private final CaseRepository caseRepository;

    public List<ScoreResponse> getUserScores(String userId) {
        return scoreRepository.findByUserIdOrderByCreatedAtDesc(userId).stream()
                .map(this::toScoreResponse)
                .collect(Collectors.toList());
    }

    public UserStatsDTO getUserStats(String userId) {
        List<Score> scores = scoreRepository.findByUserIdOrderByCreatedAtDesc(userId);
        long totalCases = caseRepository.count();

        if (scores.isEmpty()) {
            return UserStatsDTO.builder()
                    .casesCompleted(0)
                    .totalCases((int) totalCases)
                    .averageScore(0.0)
                    .bestScore(0)
                    .badges(Collections.emptyList())
                    .recentScores(Collections.emptyList())
                    .build();
        }

        Set<Long> uniqueCompletedCases = scores.stream().map(Score::getCaseId).collect(Collectors.toSet());
        double avgScore = scores.stream().mapToInt(Score::getTotalScore).average().orElse(0.0);
        int bestScore = scores.stream().mapToInt(Score::getTotalScore).max().orElse(0);

        List<String> badges = new ArrayList<>();
        if (!uniqueCompletedCases.isEmpty()) badges.add("ADR Detective");
        if (avgScore >= 80.0) badges.add("Causality Expert");
        if (uniqueCompletedCases.size() >= 3) badges.add("Safe Pharmacist");
        if (bestScore >= 95) badges.add("Reporting Champion");

        List<ScoreResponse> recent = scores.stream().limit(5).map(this::toScoreResponse).collect(Collectors.toList());

        return UserStatsDTO.builder()
                .casesCompleted(uniqueCompletedCases.size())
                .totalCases((int) totalCases)
                .averageScore(Math.round(avgScore * 10.0) / 10.0)
                .bestScore(bestScore)
                .badges(badges)
                .recentScores(recent)
                .build();
    }

    private ScoreResponse toScoreResponse(Score s) {
        String title = caseRepository.findById(s.getCaseId())
                .map(Case::getTitle)
                .orElse("Case #" + s.getCaseId());

        return ScoreResponse.builder()
                .id(s.getId())
                .caseId(s.getCaseId())
                .caseTitle(title)
                .userId(s.getUserId())
                .totalScore(s.getTotalScore())
                .maxScore(s.getMaxScore())
                .percentage(s.getPercentage())
                .stars(s.getStars())
                .createdAt(s.getCreatedAt())
                .build();
    }
}
