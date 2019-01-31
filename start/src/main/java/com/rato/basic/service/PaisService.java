package com.rato.basic.service;

import com.rato.basic.model.Pais;

public interface PaisService extends BasicServices<Pais> {
	Pais findByNombre(String nombre);
}
