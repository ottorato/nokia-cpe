package com.rato.basic.service;

import java.util.List;

import com.rato.basic.model.CodigoPostal;
import com.rato.basic.model.Municipio;

public interface CodigoPostalService extends BasicServices<CodigoPostal> {

	List<CodigoPostal> findBySCP(String cp);
	List<CodigoPostal> findByMunicipio(Municipio municipio);
}
