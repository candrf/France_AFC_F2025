package org.france.backend.controller;

import org.france.backend.entities.Widget;
import org.france.backend.entities.WidgetUpdateDto;
import org.france.backend.service.WidgetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/widgets")
public class WidgetController {
    private final WidgetService widgetService;

    WidgetController(WidgetService widgetService){
        this.widgetService = widgetService;
    }

    // Create
    @PostMapping()
    public ResponseEntity<Widget> createWidget(@RequestBody Widget widget){
        Widget savedWidget = widgetService.saveWidget(widget);
        return ResponseEntity.status(201).body(savedWidget);
    }

    // Read
    @GetMapping()
    public ResponseEntity<List<Widget>> getAllWidgets(){
        return ResponseEntity.ok(widgetService.findAllWidgets());
    }

    // Update
    @PatchMapping("/{widgetId}")
    public ResponseEntity<Widget> updateWidget(@PathVariable Integer widgetId, @RequestBody WidgetUpdateDto dto){
        Widget updated = widgetService.updateWidget(widgetId, dto);
        return ResponseEntity.ok(updated);
    }

    // Delete
    @DeleteMapping("/{widgetId}")
    public ResponseEntity<Void> deleteWidget(@PathVariable Integer widgetId){
        widgetService.deleteWidget(widgetId);
        return ResponseEntity.noContent().build();
    }

}
