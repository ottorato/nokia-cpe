package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.CPE;
import com.rato.basic.repository.CPERepository;
import com.rato.basic.service.CPEService;

@Service
@Transactional
public class CPEServiceImpl implements CPEService {

	@Autowired
    private CPERepository repository;
	
	@Override
	public CPE save(CPE t) {
		return repository.save(t);
	}

	@Override
	public CPE findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public List<CPE> findAll() {
		return repository.findAll();
	}
	
	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);		
	}

}
