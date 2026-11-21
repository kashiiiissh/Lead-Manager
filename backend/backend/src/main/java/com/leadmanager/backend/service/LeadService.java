package com.leadmanager.backend.service;

import com.leadmanager.backend.dto.LeadRequest;
import com.leadmanager.backend.entity.Lead;
import com.leadmanager.backend.repository.LeadRepository;
import com.leadmanager.backend.exception.ResourceNotFoundException;
import com.leadmanager.backend.enums.LeadStatus;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeadService {

    private final LeadRepository leadRepository;

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    public Lead getLeadById(Long id) {
        return leadRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Lead not found with ID: " + id));
    }

    public Lead createLead(LeadRequest request) {

        Lead lead = new Lead();

        lead.setName(request.getName());
        lead.setEmail(request.getEmail());
        lead.setPhone(request.getPhone());
        lead.setCompany(request.getCompany());
        lead.setSource(request.getSource());
        lead.setStatus(request.getStatus());

        return leadRepository.save(lead);
    }

    public Lead updateLead(Long id, LeadRequest request) {

        Lead existingLead = getLeadById(id);

        existingLead.setName(request.getName());
        existingLead.setEmail(request.getEmail());
        existingLead.setPhone(request.getPhone());
        existingLead.setCompany(request.getCompany());
        existingLead.setSource(request.getSource());
        existingLead.setStatus(request.getStatus());

        return leadRepository.save(existingLead);
    }

    public void deleteLead(Long id) {
        Lead existingLead = getLeadById(id);
        leadRepository.delete(existingLead);
    }
    public List<Lead> searchLeads(String name, LeadStatus status) {

        if (name != null && !name.isBlank() && status != null) {
            return leadRepository
                    .findByNameContainingIgnoreCaseAndStatus(name, status);
        }

        if (name != null && !name.isBlank()) {
            return leadRepository
                    .findByNameContainingIgnoreCase(name);
        }

        if (status != null) {
            return leadRepository.findByStatus(status);
        }

        return leadRepository.findAll();
    }
}