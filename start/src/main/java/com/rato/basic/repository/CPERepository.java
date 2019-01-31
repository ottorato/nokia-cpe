package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.CPE;

@Repository
public interface CPERepository extends JpaRepository<CPE, Long>{

}
