package com.rato.basic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.CodigoPostal;
import com.rato.basic.model.Municipio;

@Repository
public interface CodigoPostalRepository extends JpaRepository<CodigoPostal, Long> {
	List<CodigoPostal> findBySCP(String cp);
	List<CodigoPostal> findByMunicipio(Municipio municipio);
}
