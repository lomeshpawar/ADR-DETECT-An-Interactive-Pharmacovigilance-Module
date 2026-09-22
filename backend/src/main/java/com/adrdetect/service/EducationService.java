package com.adrdetect.service;

import com.adrdetect.entity.EducationContent;
import com.adrdetect.entity.ReactionTypeInfo;
import com.adrdetect.repository.EducationContentRepository;
import com.adrdetect.repository.ReactionTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EducationService {
    private final ReactionTypeRepository reactionTypeRepository;
    private final EducationContentRepository educationContentRepository;

    public List<ReactionTypeInfo> getAllReactionTypes() {
        return reactionTypeRepository.findAll();
    }

    public List<EducationContent> getAllModules() {
        return educationContentRepository.findAll();
    }
}
