package com.adrdetect.controller;

import com.adrdetect.dto.ApiResponse;
import com.adrdetect.dto.AssessmentRequest;
import com.adrdetect.dto.AssessmentResponse;
import com.adrdetect.service.AssessmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cases/{caseId}/assessment")
@RequiredArgsConstructor
@Tag(name = "Assessment", description = "ADR evaluation and scoring engine")
public class AssessmentController {
    private final AssessmentService assessmentService;

    @PostMapping
    @Operation(summary = "Submit student assessment and receive real-time score & feedback")
    public ApiResponse<AssessmentResponse> submitAssessment(
            @PathVariable Long caseId,
            @Valid @RequestBody AssessmentRequest request) {
        AssessmentResponse response = assessmentService.evaluateAssessment(caseId, request);
        return ApiResponse.ok("Assessment evaluated successfully", response);
    }
}
