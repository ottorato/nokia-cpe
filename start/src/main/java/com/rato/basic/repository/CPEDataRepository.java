package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.CPEData;

@Repository
public interface CPEDataRepository extends JpaRepository<CPEData, Long> {
	@Query("from CPEData c where c.cpe.id = :id")
	CPEData findLastCPEDataByCPEId(@Param("id") Long id);
	
	CPEData findTopByCpeIdOrderByDateDesc(Long id);
}
