package com.rato.basic.service;

import com.rato.basic.model.Municipio;

public interface MunicipioService extends BasicServices<Municipio> {
	Municipio findByNombre(String nombre);
}
