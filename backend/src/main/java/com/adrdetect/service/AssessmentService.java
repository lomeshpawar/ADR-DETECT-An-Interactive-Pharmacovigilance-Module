package com.adrdetect.service;

import com.adrdetect.dto.AssessmentRequest;
import com.adrdetect.dto.AssessmentResponse;
import com.adrdetect.entity.Case;
import com.adrdetect.entity.ReactionTypeInfo;
import com.adrdetect.entity.Score;
import com.adrdetect.exception.ResourceNotFoundException;
import com.adrdetect.repository.CaseRepository;
import com.adrdetect.repository.ReactionTypeRepository;
import com.adrdetect.repository.ScoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AssessmentService {
    private final CaseRepository caseRepository;
    private final ReactionTypeRepository reactionTypeRepository;
    private final ScoreRepository scoreRepository;

    @Transactional
    public AssessmentResponse evaluateAssessment(Long caseId, AssessmentRequest request) {
        Case c = caseRepository.findById(caseId)
                .orElseThrow(() -> new ResourceNotFoundException("Case not found with id: " + caseId));

        // 1. Suspected Drug (15 pts) - case-insensitive partial/fuzzy match
        boolean drugCorrect = request.getSuspectedDrug() != null &&
                c.getSuspectedDrug().toLowerCase().trim().contains(request.getSuspectedDrug().toLowerCase().trim());
        int drugScore = drugCorrect ? 15 : 0;

        // 2. Reaction Identification (15 pts)
        boolean reactionCorrect = request.getReaction() != null &&
                (c.getReactionName().toLowerCase().contains(request.getReaction().toLowerCase().trim()) ||
                 request.getReaction().toLowerCase().contains(c.getReactionName().toLowerCase().trim()));
        int reactionScore = reactionCorrect ? 15 : 0;

        // 3. Reaction Type A-F (20 pts)
        boolean reactionTypeCorrect = request.getReactionType() != null &&
                c.getReactionTypeCode() == request.getReactionType();
        int reactionTypeScore = reactionTypeCorrect ? 20 : 0;

        // 4. Severity (15 pts)
        boolean severityCorrect = request.getSeverity() != null &&
                c.getSeverity() == request.getSeverity();
        int severityScore = severityCorrect ? 15 : 0;

        // 5. Causality (15 pts)
        boolean causalityCorrect = request.getCausality() != null &&
                c.getCausality() == request.getCausality();
        int causalityScore = causalityCorrect ? 15 : 0;

        // 6. Pharmacist Intervention (10 pts)
        List<String> correctInterventionsList = c.getCorrectInterventions() != null ?
                Arrays.stream(c.getCorrectInterventions().split(","))
                        .map(String::trim)
                        .collect(Collectors.toList()) : Collections.emptyList();

        List<String> submittedInterventionsList = request.getInterventions() != null ?
                request.getInterventions() : Collections.emptyList();

        boolean interventionsCorrect = false;
        int interventionScore = 0;
        if (!correctInterventionsList.isEmpty() && !submittedInterventionsList.isEmpty()) {
            long matchCount = submittedInterventionsList.stream()
                    .filter(correctInterventionsList::contains)
                    .count();
            if (matchCount == correctInterventionsList.size() && submittedInterventionsList.size() == correctInterventionsList.size()) {
                interventionsCorrect = true;
                interventionScore = 10;
            } else if (matchCount > 0) {
                interventionScore = (int) Math.round((double) matchCount / correctInterventionsList.size() * 10);
            }
        }

        // 7. Reporting points (10 pts granted during assessment flow)
        int reportingScore = 10;

        int totalScore = drugScore + reactionScore + reactionTypeScore + severityScore + causalityScore + interventionScore + reportingScore;
        int maxScore = 100;
        double percentage = ((double) totalScore / maxScore) * 100.0;

        int stars = 1;
        if (percentage >= 90) stars = 5;
        else if (percentage >= 75) stars = 4;
        else if (percentage >= 60) stars = 3;
        else if (percentage >= 40) stars = 2;

        // Save Score Entity
        String userId = (request.getUserId() != null && !request.getUserId().isBlank()) ? request.getUserId() : "student-demo";
        Score scoreRecord = Score.builder()
                .caseId(caseId)
                .userId(userId)
                .suspectedDrugScore(drugScore)
                .reactionScore(reactionScore)
                .reactionTypeScore(reactionTypeScore)
                .severityScore(severityScore)
                .causalityScore(causalityScore)
                .interventionScore(interventionScore)
                .reportingScore(reportingScore)
                .totalScore(totalScore)
                .maxScore(maxScore)
                .percentage(percentage)
                .stars(stars)
                .build();
        scoreRepository.save(scoreRecord);

        // Fetch Reaction Type Info for rich explanation
        ReactionTypeInfo typeInfo = reactionTypeRepository.findById(c.getReactionTypeCode().name()).orElse(null);
        String typeDef = typeInfo != null ? 
                String.format("Type %s (%s): %s. Mechanism: %s", typeInfo.getCode(), typeInfo.getName(), typeInfo.getDescription(), typeInfo.getMechanism()) :
                "Type " + c.getReactionTypeCode().name();

        return AssessmentResponse.builder()
                .caseId(caseId)
                .caseTitle(c.getTitle())
                .suspectedDrugScore(drugScore)
                .reactionScore(reactionScore)
                .reactionTypeScore(reactionTypeScore)
                .severityScore(severityScore)
                .causalityScore(causalityScore)
                .interventionScore(interventionScore)
                .reportingScore(reportingScore)
                .totalScore(totalScore)
                .maxScore(maxScore)
                .percentage(percentage)
                .stars(stars)
                .submittedDrug(request.getSuspectedDrug())
                .correctDrug(c.getSuspectedDrug())
                .drugCorrect(drugCorrect)
                .submittedReaction(request.getReaction())
                .correctReaction(c.getReactionName())
                .reactionCorrect(reactionCorrect)
                .submittedReactionType(request.getReactionType())
                .correctReactionType(c.getReactionTypeCode())
                .reactionTypeCorrect(reactionTypeCorrect)
                .submittedSeverity(request.getSeverity())
                .correctSeverity(c.getSeverity())
                .severityCorrect(severityCorrect)
                .submittedCausality(request.getCausality())
                .correctCausality(c.getCausality())
                .causalityCorrect(causalityCorrect)
                .submittedInterventions(submittedInterventionsList)
                .correctInterventions(correctInterventionsList)
                .interventionsCorrect(interventionsCorrect)
                .reactionTypeDefinition(typeDef)
                .clinicalExplanation(c.getClinicalExplanation())
                .learningPoints(c.getLearningPoints())
                .outcome(c.getOutcome())
                .build();
    }
}
