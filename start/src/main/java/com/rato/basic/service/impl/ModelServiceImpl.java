package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.Model;
import com.rato.basic.repository.ModelRepository;
import com.rato.basic.service.ModelService;

@Service
@Transactional
public class ModelServiceImpl implements ModelService {

	@Autowired
    private ModelRepository repository;
	
	@Override
	public Model save(Model t) {
		return repository.save(t);
	}

	@Override
	public Model findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public List<Model> findAll() {
		return repository.findAll();
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);		
	}

}
