package com.leadmanager.backend.repository;

import com.leadmanager.backend.entity.Lead;
import com.leadmanager.backend.enums.LeadStatus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface LeadRepository extends JpaRepository<Lead, Long> {

    List<Lead> findByNameContainingIgnoreCase(String name);

    List<Lead> findByStatus(LeadStatus status);

    List<Lead> findByNameContainingIgnoreCaseAndStatus(
            String name, LeadStatus status
    );
}