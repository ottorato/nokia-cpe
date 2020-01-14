package com.rato.basic.service;

import com.rato.basic.model.CodigoPostal;

public interface CodigoPostalService extends BasicServices<CodigoPostal> {
	CodigoPostal findByNombre(String nombre);
}
