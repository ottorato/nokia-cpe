package com.rato.basic.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.Estado;
import com.rato.basic.model.Pais;
import com.rato.basic.repository.EstadoRepository;
import com.rato.basic.service.EstadoService;

@Service
@Transactional
public class EstadoServiceImpl implements EstadoService{

	@Autowired
    private EstadoRepository repository;
	
	public EstadoServiceImpl() {
		super();
	}

	@Override
	public Estado save(Estado t) {
		Estado estado = repository.save(t);
		return estado;
	}

	@Override
	public Estado findById(Long id) {
		
		Estado estado = null;
		Optional<Estado> optional = repository.findById(id);
		if (optional.isPresent()) {
			estado = optional.get();
		}
		return estado;
	}

	@Override
	public List<Estado> findAll() {
		List<Estado> estados = repository.findAll();
		return estados;
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Estado findByNombre(String nombre) {
		Estado estado = repository.findByNombre(nombre);
		return estado;
	}

	@Override
	public List<Estado> findByPais(Pais pais) {
		List<Estado> list = repository.findByPais(pais);
		return list;
	}

}
