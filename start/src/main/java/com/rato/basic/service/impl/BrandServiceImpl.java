package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.Brand;
import com.rato.basic.repository.BrandRepository;
import com.rato.basic.service.BrandService;

@Service
@Transactional
public class BrandServiceImpl implements BrandService {

	@Autowired
    private BrandRepository repository;
	
	@Override
	public Brand save(Brand t) {
		return repository.save(t);
	}

	@Override
	public Brand findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public List<Brand> findAll() {
		return repository.findAll();
	}
	
	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);		
	}

}
