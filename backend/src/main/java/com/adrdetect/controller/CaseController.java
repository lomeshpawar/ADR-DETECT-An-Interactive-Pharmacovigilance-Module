package com.adrdetect.controller;

import com.adrdetect.dto.ApiResponse;
import com.adrdetect.dto.CaseCreateDTO;
import com.adrdetect.dto.CaseDetailDTO;
import com.adrdetect.dto.CaseSummaryDTO;
import com.adrdetect.service.CaseService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
@RequiredArgsConstructor
@Tag(name = "Cases", description = "Endpoints for fetching and creating patient pharmacovigilance cases")
public class CaseController {
    private final CaseService caseService;

    @GetMapping
    @Operation(summary = "Get all cases in the Case Bank")
    public ApiResponse<List<CaseSummaryDTO>> getAllCases() {
        return ApiResponse.ok("Cases retrieved successfully", caseService.getAllCases());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get full case details by ID")
    public ApiResponse<CaseDetailDTO> getCaseById(@PathVariable Long id) {
        return ApiResponse.ok("Case retrieved successfully", caseService.getCaseById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Create and add a new educational patient case (Pharmacist / Admin)")
    public ApiResponse<CaseDetailDTO> createCase(@Valid @RequestBody CaseCreateDTO dto) {
        CaseDetailDTO created = caseService.createCase(dto);
        return ApiResponse.ok("Case created successfully", created);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a case by ID")
    public ApiResponse<Void> deleteCase(@PathVariable Long id) {
        caseService.deleteCase(id);
        return ApiResponse.ok("Case deleted successfully", null);
    }
}
