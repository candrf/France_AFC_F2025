package org.france.backend.entities;

import java.time.LocalDateTime;

public record WidgetUpdateDto(
        String name,
        String blurb,
        String slug,
        Double price,
        Integer quantity,
        Integer rating,
        LocalDateTime updatedAt,
        Color color,
        Lifecycle lifecycle,
        String imageUrl
) {}
