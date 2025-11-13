package org.france.backend.service;

import org.france.backend.entities.Color;
import org.france.backend.entities.Lifecycle;
import org.france.backend.entities.Widget;
import org.france.backend.entities.WidgetUpdateDto;
import org.france.backend.repository.WidgetRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class WidgetService {
    private final WidgetRepository widgetRepository;

    WidgetService(WidgetRepository widgetRepository){
        this.widgetRepository =  widgetRepository;
    }

    public Widget saveWidget(Widget widget){
        return widgetRepository.save(widget);
    }

    public Widget findWidget(Integer id){
        return widgetRepository.findById(id).orElseThrow();
    }
    public List<Widget> findAllWidgets(){
        return widgetRepository.findAll();
    }

    public Widget updateWidget(Integer id, WidgetUpdateDto dto){
        Widget widget = widgetRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Widget not found")
        );
        widget.setName(dto.name());
        widget.setBlurb(dto.blurb());
        widget.setSlug(dto.slug());
        widget.setPrice(dto.price());
        widget.setQuantity(dto.quantity());
        widget.setRating(dto.rating());
        widget.setUpdatedAt(dto.updatedAt());
        widget.setColor(dto.color());
        widget.setLifecycle(dto.lifecycle());
        widget.setImageUrl(dto.imageUrl());

        return  widgetRepository.save(widget);
    }

    public void deleteWidget(Integer id){
        widgetRepository.deleteById(id);
    }


}
