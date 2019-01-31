package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.Pais;

@Repository
public interface PaisRepository extends JpaRepository<Pais, Long> {

	Pais findByNombre(String nombre);
}
