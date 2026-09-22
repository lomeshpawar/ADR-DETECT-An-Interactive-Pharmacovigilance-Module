package com.adrdetect.service;

import com.adrdetect.dto.AssessmentRequest;
import com.adrdetect.dto.AssessmentResponse;
import com.adrdetect.enums.Causality;
import com.adrdetect.enums.ReactionType;
import com.adrdetect.enums.Severity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AssessmentServiceTest {

    @Autowired
    private AssessmentService assessmentService;

    @Autowired
    private CaseService caseService;

    @Test
    void testCaseRetrieval() {
        var cases = caseService.getAllCases();
        assertNotNull(cases);
        assertFalse(cases.isEmpty());
        assertEquals(5, cases.size());
    }

    @Test
    void testFullScoreAssessmentForCase1() {
        AssessmentRequest request = AssessmentRequest.builder()
                .userId("test-user")
                .suspectedDrug("Ofloxacin")
                .reaction("Skin rash")
                .reactionType(ReactionType.B)
                .severity(Severity.MILD)
                .causality(Causality.PROBABLE)
                .interventions(List.of("STOP_DRUG", "SYMPTOMATIC_TREATMENT", "MONITOR_PATIENT"))
                .build();

        AssessmentResponse response = assessmentService.evaluateAssessment(1L, request);

        assertNotNull(response);
        assertEquals(100, response.getTotalScore());
        assertEquals(5, response.getStars());
        assertTrue(response.isDrugCorrect());
        assertTrue(response.isReactionCorrect());
        assertTrue(response.isReactionTypeCorrect());
        assertTrue(response.isSeverityCorrect());
        assertTrue(response.isCausalityCorrect());
        assertTrue(response.isInterventionsCorrect());
    }

    @Test
    void testPartialScoreForCase1() {
        AssessmentRequest request = AssessmentRequest.builder()
                .userId("test-user")
                .suspectedDrug("Metformin") // Incorrect
                .reaction("Skin rash")      // Correct (15)
                .reactionType(ReactionType.A) // Incorrect
                .severity(Severity.MILD)    // Correct (15)
                .causality(Causality.POSSIBLE) // Incorrect
                .interventions(List.of("STOP_DRUG")) // Partial
                .build();

        AssessmentResponse response = assessmentService.evaluateAssessment(1L, request);

        assertNotNull(response);
        assertFalse(response.isDrugCorrect());
        assertEquals(0, response.getSuspectedDrugScore());
        assertEquals(15, response.getReactionScore());
        assertEquals(15, response.getSeverityScore());
        assertTrue(response.getTotalScore() < 100);
    }
}
