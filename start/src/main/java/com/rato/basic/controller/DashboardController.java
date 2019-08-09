package com.rato.basic.controller;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rato.basic.dto.CPEDTO;
import com.rato.basic.dto.RespuestaAngularDTO;
import com.rato.basic.model.Brand;
import com.rato.basic.model.CPE;
import com.rato.basic.model.CPEData;
import com.rato.basic.model.EndPoint;
import com.rato.basic.model.Model;
import com.rato.basic.model.Pais;
import com.rato.basic.service.BrandService;
import com.rato.basic.service.CPEService;
import com.rato.basic.service.EndPointService;
import com.rato.basic.service.ModelService;
import com.rato.basic.service.PaisService;

import kong.unirest.HttpResponse;
import kong.unirest.Unirest;



@RestController
@RequestMapping("/dash")
public class DashboardController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
    private PaisService paisService;
	
	@Autowired
    private BrandService brandService;
	
	@Autowired
    private ModelService modelService;
	
	@Autowired
    private CPEService cpeService;
	
	@Autowired
    private EndPointService endpointService;
	
	@GetMapping(value="/listaCPEs", produces = "application/json")
    public RespuestaAngularDTO listaCPEs() {
    	logger.info("Recuperando CPEs...");
    	Map<String, Object> mapa = new HashMap<>();
    	
    	List<EndPoint> endpoints = endpointService.findAll();
    	List<CPE> cpes = cpeService.findAll();
    	mapa.put("endpoints", endpoints);
    	mapa.put("cpes", cpes);
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", mapa);
    	
    	return respuesta;
    }
	
	@GetMapping(value="/cpeStatus", produces = "application/json")
    public RespuestaAngularDTO cpeStatus(String endPoint, String id) {

		EndPoint ep = endpointService.findById(Long.valueOf(endPoint));
		
		CPE cpe = cpeService.findById(Long.valueOf(id));
		CPEData cpeData = new CPEData(cpe);
		
		try {
			String encode = URLEncoder.encode(ep.getURL(), "UTF-8"); 

			HttpResponse<String> response = Unirest.post(encode)
					  .header("Content-Type", "application/json")
					  .header("Authorization", "Basic d2Vic2VydmljZXVzZXI6d2Vic2VydmljZXVzZXIx")
					  .header("User-Agent", "PostmanRuntime/7.15.2")
					  .header("Accept", "*/*")
					  .header("Cache-Control", "no-cache")
					  .header("Postman-Token", "3b53439b-339d-4adf-a6d5-f147574707e1,a06e73f8-dd4c-4c6c-8079-f46933a3d5ca")
					  .header("Host", "xtfeegcsmp.xdev.motive.com")
					  .header("Cookie", "JSESSIONID=IBEuV13NdKOoJGxenvvHPYsT.xtfee12_7403; JSESSIONIDSSO=1YrwEE7KWNiL_xy0Phyxpcxs; ROUTEID=.xtfee12_7403")
					  .header("Accept-Encoding", "gzip, deflate")
					  .header("Connection", "keep-alive")
					  .header("cache-control", "no-cache")
					  .body("{\"subscriber\": {\"uniqueID\": \"12345\"}, \"parameters\": {\"subscriberId\": \"" + cpe.getSuscriptor() + "\"}}")
					  .asString();
			parseResponse(response);
		} catch (Exception| Error e) {
			logger.error(e.getMessage());
		}
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", null);
    	
    	return respuesta;
    }
	
	private void parseResponse(HttpResponse<String> response) {
		
	}

	@GetMapping(value="/listaInicial", produces = "application/json")
    public RespuestaAngularDTO listaInicial() {
    	logger.info("Recuperando estados y países...");
    	Map<String, Object> mapa = new HashMap<>();
    	
    	List<Pais> paises = paisService.findAll();
    	List<Brand> marcas = brandService.findAll();
    	List<Model> modelos = modelService.findAll();
    	
    	mapa.put("paises", paises);
    	mapa.put("brands", marcas);
    	mapa.put("modelos", modelos);
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", mapa);
    	
    	return respuesta;
    }
	
    @PostMapping(value="/guardarMarca")
    public RespuestaAngularDTO guardarMarca(@RequestParam(value = "idPais") Long idPais, String nombre, String oui) {
    	Map<String, Object> mapa = new HashMap<>();
    	
    	Pais pais = paisService.findById(idPais);
    	Brand brand = new Brand(nombre, oui, pais);
    	brand = brandService.save(brand);
    	
    	List<Brand> marcas = brandService.findAll();

    	mapa.put("brands", marcas);

    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "Registro guardado exitosamente", mapa);
    	
    	return respuesta;
	}
	
    @PostMapping(value="/borrarModelo")
    public RespuestaAngularDTO borrarModelo(@RequestParam(value = "id") Long id) {
    	Map<String, Object> mapa = new HashMap<>();
    	RespuestaAngularDTO respuesta = null;
    	
    	try {
    		modelService.deleteById(id);
			respuesta = new RespuestaAngularDTO(0, "Record deleted");
		} catch (EmptyResultDataAccessException e) {
			logger.error("Record not found");
			respuesta = new RespuestaAngularDTO(1, "Error: Record not found");
		} catch (Exception e) {
			e.printStackTrace();
			respuesta = new RespuestaAngularDTO(1, "Error deleting (unexpected)");
		}
    	
    	List<Model> modelos = modelService.findAll();

    	mapa.put("modelos", modelos);

    	respuesta.setObjeto(mapa);
    	
    	return respuesta;
	}
    
    @PostMapping(value="/guardarPais")
    public RespuestaAngularDTO guardarPais(Long id, String nombre, String nombreCorto) {
    	Map<String, Object> mapa = new HashMap<>();
    	
    	RespuestaAngularDTO respuesta = null;
    	Pais pais = null;
    	try {
			pais = paisService.findByNombre(nombre);
			if (pais != null) {
		    	respuesta = new RespuestaAngularDTO(1, "Record already exists", mapa);
		    	return respuesta;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
    	pais = new Pais(id, nombre, nombreCorto);
    	paisService.save(pais);
    	List<Pais> paises = paisService.findAll();

    	mapa.put("paises", paises);
    	respuesta = new RespuestaAngularDTO(0, "Record saved succesfully", mapa);

    	return respuesta;
    }
	
    @PostMapping(value="/guardarModelo")
    public RespuestaAngularDTO guardarModelo(@RequestParam(value = "id") Long id, Long idMarca, @RequestParam(value = "nombre") String nombre) {
    	Map<String, Object> mapa = new HashMap<>();
    	
    	Model modelo = null;
    	if (id.intValue() == 0) {
    		Brand marca = brandService.findById(idMarca);
	    	modelo = new Model(nombre, marca);
	    	modelo = modelService.save(modelo);
    	} else {
    		modelo = modelService.findById(id);
    		modelo.setNombre(nombre);
	    	modelo = modelService.save(modelo);
    	}
    	
    	List<Model> modelos = modelService.findAll();

    	mapa.put("modelos", modelos);

    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "Record saved succesfully", mapa);
    	
    	return respuesta;
	}
    
    @PostMapping(value="/guardarCPE")
    public RespuestaAngularDTO guardarCPE(@RequestBody CPEDTO cpe) {
    	Map<String, Object> mapa = new HashMap<>();
	
    	RespuestaAngularDTO respuesta = null;
    	try {
			if (cpe.getId() == null) {
				Model model = modelService.findById(cpe.getModelId());
				CPE cpePersistence = new CPE(cpe.getSerie(), cpe.getSuscriptor(), cpe.getFirmware(), cpe.getIpAddress(), cpe.getMacAddress(), model);
				cpeService.save(cpePersistence);
				respuesta = new RespuestaAngularDTO(0, "Record saved succesfully", mapa);
			} else {
				CPE cpePersistence = cpeService.findById(cpe.getId());
				cpePersistence.setSerie(cpe.getSerie());
				cpePersistence.setSuscriptor(cpe.getSuscriptor());
				cpePersistence.setFirmware(cpe.getFirmware());
				cpePersistence.setIpAddress(cpe.getIpAddress());
				cpePersistence.setMacAddress(cpe.getMacAddress());
				respuesta = new RespuestaAngularDTO(0, "Record updated succesfully", mapa);
			}
		} catch (Exception e) {
	    	respuesta = new RespuestaAngularDTO(1, "Error persisting record", mapa);
			e.printStackTrace();
		}
    	
    	return respuesta;
    }
}
