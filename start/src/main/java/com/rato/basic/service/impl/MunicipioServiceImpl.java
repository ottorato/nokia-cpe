package com.rato.basic.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.Municipio;
import com.rato.basic.repository.MunicipioRepository;
import com.rato.basic.service.MunicipioService;

@Service
@Transactional
public class MunicipioServiceImpl implements MunicipioService {

	@Autowired
    private MunicipioRepository repository;
	
	public MunicipioServiceImpl() {
		super();
	}
	
	@Override
	public Municipio save(Municipio t) {
		Municipio municipio = repository.save(t);
		return municipio;
	}

	@Override
	public Municipio findById(Long id) {
		
		Municipio municipio = null;
		Optional<Municipio> optional = repository.findById(id);
		if (optional.isPresent()) {
			municipio = optional.get();
		}
		return municipio;
	}

	@Override
	public List<Municipio> findAll() {
		List<Municipio> municipios = repository.findAll();
		return municipios;
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Municipio findByNombre(String nombre) {
		Municipio municipio = repository.findByNombre(nombre);
		return municipio;
	}

}
