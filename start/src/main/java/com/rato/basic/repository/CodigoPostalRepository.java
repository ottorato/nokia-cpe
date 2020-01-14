package com.rato.basic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.CodigoPostal;

@Repository
public interface CodigoPostalRepository extends JpaRepository<CodigoPostal, Long> {

	CodigoPostal findByNombre(String nombre);
}
