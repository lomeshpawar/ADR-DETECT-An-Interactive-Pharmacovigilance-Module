package com.adrdetect.dto;

import com.adrdetect.enums.Causality;
import com.adrdetect.enums.ReactionType;
import com.adrdetect.enums.Severity;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AssessmentRequest {
    private String userId;

    @NotBlank(message = "Suspected drug is required")
    private String suspectedDrug;

    @NotBlank(message = "Reaction name is required")
    private String reaction;

    @NotNull(message = "Reaction type (A-F) is required")
    private ReactionType reactionType;

    @NotNull(message = "Severity assessment is required")
    private Severity severity;

    @NotNull(message = "WHO-UMC Causality is required")
    private Causality causality;

    private List<String> interventions;
}
