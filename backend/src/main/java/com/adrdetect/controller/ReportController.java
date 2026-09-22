package com.adrdetect.controller;

import com.adrdetect.dto.ApiResponse;
import com.adrdetect.dto.ReportRequest;
import com.adrdetect.entity.ADRReport;
import com.adrdetect.service.ReportService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
@Tag(name = "Reporting", description = "Endpoints for digital ADR reporting")
public class ReportController {
    private final ReportService reportService;

    @PostMapping
    @Operation(summary = "Submit a completed digital ADR report")
    public ApiResponse<ADRReport> submitReport(@Valid @RequestBody ReportRequest request) {
        ADRReport report = reportService.submitReport(request);
        return ApiResponse.ok("ADR Report submitted successfully", report);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get report details by ID")
    public ApiResponse<ADRReport> getReportById(@PathVariable Long id) {
        return ApiResponse.ok("ADR Report retrieved successfully", reportService.getReportById(id));
    }
}
