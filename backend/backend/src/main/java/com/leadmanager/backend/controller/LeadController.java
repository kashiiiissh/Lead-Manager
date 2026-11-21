package com.leadmanager.backend.controller;

import com.leadmanager.backend.dto.LeadRequest;
import com.leadmanager.backend.entity.Lead;
import com.leadmanager.backend.service.LeadService;
import com.leadmanager.backend.enums.LeadStatus;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "http://localhost:5173")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @GetMapping
    public ResponseEntity<List<Lead>> getAllLeads(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) LeadStatus status) {

        return ResponseEntity.ok(
                leadService.searchLeads(name, status)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lead> getLeadById(@PathVariable Long id) {
        return ResponseEntity.ok(leadService.getLeadById(id));
    }

    @PostMapping
    public ResponseEntity<Lead> createLead(
            @Valid @RequestBody LeadRequest request) {

        Lead savedLead = leadService.createLead(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedLead);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lead> updateLead(
            @PathVariable Long id,
            @Valid @RequestBody LeadRequest request) {

        return ResponseEntity.ok(leadService.updateLead(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLead(@PathVariable Long id) {

        leadService.deleteLead(id);

        return ResponseEntity.noContent().build();
    }
}