package com.rato.basic.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.CodigoPostal;
import com.rato.basic.model.Municipio;
import com.rato.basic.repository.CodigoPostalRepository;
import com.rato.basic.service.CodigoPostalService;

@Service
@Transactional
public class CodigoPostalServiceImpl implements CodigoPostalService {

	@Autowired
    private CodigoPostalRepository repository;
	
	public CodigoPostalServiceImpl() {
		super();
	}
	
	@Override
	public List<CodigoPostal> findByMunicipio(Municipio municipio) {
		List<CodigoPostal> cps = repository.findByMunicipio(municipio);
		return cps;
	}
	
	@Override
	public List<CodigoPostal> findBySCP(String cp) {
		List<CodigoPostal> cps = repository.findBySCP(cp);
		return cps;
	}

	@Override
	public CodigoPostal save(CodigoPostal t) {
		CodigoPostal codigoPostal = repository.save(t);
		return codigoPostal;
	}

	@Override
	public CodigoPostal findById(Long id) {
		
		CodigoPostal codigoPostal = null;
		Optional<CodigoPostal> optional = repository.findById(id);
		if (optional.isPresent()) {
			codigoPostal = optional.get();
		}
		return codigoPostal;
	}

	@Override
	public List<CodigoPostal> findAll() {
		List<CodigoPostal> codigoPostals = repository.findAll();
		return codigoPostals;
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
	}
}
