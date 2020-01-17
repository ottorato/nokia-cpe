package com.rato.basic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.Estado;
import com.rato.basic.model.Municipio;

@Repository
public interface MunicipioRepository extends JpaRepository<Municipio, Long> {

	Municipio findByNombre(String nombre);
	List<Municipio> findByEstado(Estado eestado);
}
