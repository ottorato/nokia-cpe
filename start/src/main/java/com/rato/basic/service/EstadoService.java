package com.rato.basic.service;

import java.util.List;

import com.rato.basic.model.Estado;
import com.rato.basic.model.Pais;

public interface EstadoService extends BasicServices<Estado> {
	Estado findByNombre(String nombre);
	List<Estado> findByPais(Pais pais);
}
