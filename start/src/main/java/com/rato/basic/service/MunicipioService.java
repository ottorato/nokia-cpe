package com.rato.basic.service;

import java.util.List;

import com.rato.basic.model.Estado;
import com.rato.basic.model.Municipio;

public interface MunicipioService extends BasicServices<Municipio> {
	Municipio findByNombre(String nombre);
	List<Municipio> findByEstado(Estado eestado);
}
