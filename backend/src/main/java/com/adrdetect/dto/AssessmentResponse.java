package com.adrdetect.dto;

import com.adrdetect.enums.Causality;
import com.adrdetect.enums.ReactionType;
import com.adrdetect.enums.Severity;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AssessmentResponse {
    private Long caseId;
    private String caseTitle;

    // Scores
    private int suspectedDrugScore;   // max 15
    private int reactionScore;        // max 15
    private int reactionTypeScore;    // max 20
    private int severityScore;        // max 15
    private int causalityScore;       // max 15
    private int interventionScore;    // max 10
    private int reportingScore;       // max 10 (awarded on report submission)
    private int totalScore;           // max 100
    private int maxScore;
    private double percentage;
    private int stars;

    // Student Answers vs Correct Answers
    private String submittedDrug;
    private String correctDrug;
    private boolean drugCorrect;

    private String submittedReaction;
    private String correctReaction;
    private boolean reactionCorrect;

    private ReactionType submittedReactionType;
    private ReactionType correctReactionType;
    private boolean reactionTypeCorrect;

    private Severity submittedSeverity;
    private Severity correctSeverity;
    private boolean severityCorrect;

    private Causality submittedCausality;
    private Causality correctCausality;
    private boolean causalityCorrect;

    private List<String> submittedInterventions;
    private List<String> correctInterventions;
    private boolean interventionsCorrect;

    // Rationale & Learning
    private String reactionTypeDefinition;
    private String clinicalExplanation;
    private String learningPoints;
    private String outcome;
}
