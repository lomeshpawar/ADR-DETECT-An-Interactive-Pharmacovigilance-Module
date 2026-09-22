package com.adrdetect.controller;

import com.adrdetect.dto.ApiResponse;
import com.adrdetect.entity.EducationContent;
import com.adrdetect.entity.ReactionTypeInfo;
import com.adrdetect.service.EducationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/education")
@RequiredArgsConstructor
@Tag(name = "Education", description = "Pharmacovigilance theory and Reaction Type guides")
public class EducationController {
    private final EducationService educationService;

    @GetMapping("/reaction-types")
    @Operation(summary = "Get dynamic list of Reaction Types A-F and their clinical definitions")
    public ApiResponse<List<ReactionTypeInfo>> getReactionTypes() {
        return ApiResponse.ok("Reaction types retrieved successfully", educationService.getAllReactionTypes());
    }

    @GetMapping("/modules")
    @Operation(summary = "Get educational modules and reference materials")
    public ApiResponse<List<EducationContent>> getEducationModules() {
        return ApiResponse.ok("Educational modules retrieved successfully", educationService.getAllModules());
    }
}
