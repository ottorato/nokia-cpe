package com.rato.basic.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rato.basic.model.CPEData;
import com.rato.basic.repository.CPEDataRepository;
import com.rato.basic.service.CPEDataService;

@Service
@Transactional
public class CPEDataServiceImpl implements CPEDataService {

		@Autowired
	    private CPEDataRepository repository;
		
		@Override
		public CPEData save(CPEData t) {
			return repository.save(t);
		}

		@Override
		public CPEData findById(Long id) {
			return repository.findById(id).get();
		}

		@Override
		public List<CPEData> findAll() {
			return repository.findAll();
		}
		
		@Override
		public void deleteById(Long id) {
			repository.deleteById(id);		
		}
		
		@Override
		public CPEData findTopByCpeIdOrderByDateDesc(Long id) {
			return repository.findTopByCpeIdOrderByDateDesc(id);
		}

		
		@Override
		public CPEData findLastCPEDataByCPEId(Long id) {
			CPEData cpeData = repository.findLastCPEDataByCPEId(id);
	
			return cpeData;
		}
		
}
