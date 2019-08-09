package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.EndPoint;
import com.rato.basic.repository.EndPointRepository;
import com.rato.basic.service.EndPointService;

@Service
@Transactional
public class EndPointServiceImpl implements EndPointService {

	public EndPointServiceImpl() {
		super();
	}
	
	@Autowired
	private EndPointRepository repository;

	@Override
	public EndPoint save(EndPoint t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EndPoint findById(Long id) {
		return repository.findById(id).get();
	}

	@Override
	public List<EndPoint> findAll() {
		return repository.findAll();
	}

	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub

	}

}
