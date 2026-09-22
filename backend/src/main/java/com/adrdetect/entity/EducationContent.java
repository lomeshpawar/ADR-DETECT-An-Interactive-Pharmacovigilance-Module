package com.adrdetect.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "education_content")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EducationContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "slug", unique = true, nullable = false, length = 100)
    private String slug;

    @Column(name = "title", nullable = false, length = 200)
    private String title;

    @Column(name = "summary", length = 1000)
    private String summary;

    @Column(name = "content", length = 4000)
    private String content;

    @Column(name = "category", length = 100)
    private String category;

    @Column(name = "icon", length = 50)
    private String icon;
}
