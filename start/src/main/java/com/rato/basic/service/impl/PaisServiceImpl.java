package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.Pais;
import com.rato.basic.repository.PaisRepository;
import com.rato.basic.service.PaisService;

@Service
@Transactional
public class PaisServiceImpl implements PaisService {
	
	
	@Autowired
    private PaisRepository repository;

	@Override
	public Pais save(Pais pais) {
		pais = repository.save(pais);
		
		return pais;
	}
	
	@Override
	public Pais findById(Long id) {
		Pais pais = repository.findById(id).get();
		
		return pais;
	}
	
	@Override
	public List<Pais> findAll() {
		List<Pais> paises = repository.findAll();
		
		return paises;
	}
	
	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);		
	}
	
	@Override
	public Pais findByNombre(String nombre) {
		return repository.findByNombre(nombre);
	}

}