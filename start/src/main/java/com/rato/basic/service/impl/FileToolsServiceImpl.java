package com.rato.basic.service.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.rato.basic.model.CodigoPostal;
import com.rato.basic.service.FileToolsService;

@Service
@Transactional
public class FileToolsServiceImpl implements FileToolsService {
	public String COMMA;
	public FileToolsServiceImpl() {
		super();
	}
	
	private List<CodigoPostal> processInputFile(String inputFilePath) {
	    List<CodigoPostal> inputList = new ArrayList<CodigoPostal>();
	    try{
	      File inputF = new File(inputFilePath);
	      InputStream inputFS = new FileInputStream(inputF);
	      BufferedReader br = new BufferedReader(new InputStreamReader(inputFS));
	      // skip the header of the csv

	      br.close();
	    } catch (Exception e) {

	    }
	    return inputList ;
	}
	
	/**
	 * 
	
	private Function<String, CodigoPostal> mapToItem = (line) -> {
		  String[] p = line.split(COMMA);// a CSV has comma separated lines
		  CodigoPostal item = new CodigoPostal();
		  
		  item.setItemNumber(p[0]);//<-- this is the first column in the csv file
		  if (p[3] != null && p[3].trim().length() > 0) {
		    item.setSomeProeprty(p[3]);
		  }
		  //more initialization goes here
		  return item;
		} */

}
