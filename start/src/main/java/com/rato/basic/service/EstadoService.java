package com.rato.basic.service;

import com.rato.basic.model.Estado;

public interface EstadoService extends BasicServices<Estado> {
	Estado findByNombre(String nombre);
}
