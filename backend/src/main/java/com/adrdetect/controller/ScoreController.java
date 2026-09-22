package com.adrdetect.controller;

import com.adrdetect.dto.ApiResponse;
import com.adrdetect.dto.ScoreResponse;
import com.adrdetect.dto.UserStatsDTO;
import com.adrdetect.service.ScoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@RequiredArgsConstructor
@Tag(name = "Scores & Gamification", description = "Student progress, scores and achievements")
public class ScoreController {
    private final ScoreService scoreService;

    @GetMapping("/user/{userId}")
    @Operation(summary = "Get score history for a user")
    public ApiResponse<List<ScoreResponse>> getUserScores(@PathVariable String userId) {
        return ApiResponse.ok("User scores retrieved successfully", scoreService.getUserScores(userId));
    }

    @GetMapping("/stats")
    @Operation(summary = "Get aggregate statistics and badges for a user")
    public ApiResponse<UserStatsDTO> getUserStats(@RequestParam(defaultValue = "student-demo") String userId) {
        return ApiResponse.ok("User stats retrieved successfully", scoreService.getUserStats(userId));
    }
}
