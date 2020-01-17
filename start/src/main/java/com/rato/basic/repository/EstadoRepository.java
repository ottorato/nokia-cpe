package com.rato.basic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rato.basic.model.Estado;
import com.rato.basic.model.Pais;

@Repository
public interface EstadoRepository extends JpaRepository<Estado, Long> {

	Estado findByNombre(String nombre);
	List<Estado> findByPais(Pais pais);
}
