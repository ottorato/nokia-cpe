package com.rato.basic.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rato.basic.dto.RespuestaAngularDTO;
import com.rato.basic.model.CPEData;
import com.rato.basic.model.CodigoPostal;
import com.rato.basic.model.Estado;
import com.rato.basic.model.Municipio;
import com.rato.basic.model.Pais;
import com.rato.basic.service.CodigoPostalService;
import com.rato.basic.service.EstadoService;
import com.rato.basic.service.MunicipioService;
import com.rato.basic.service.PaisService;

@RestController
@RequestMapping("/tools")
public class ToolsController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
    private PaisService paisService;
	@Autowired
    private EstadoService estadoService;
	@Autowired
    private MunicipioService municipioService;
	@Autowired
    private CodigoPostalService codigoPostalService;
	
	@GetMapping(value="/getAddressData", produces = "application/json")
    public RespuestaAngularDTO getAddressData() {
		final long idPais = 1;
    	logger.info("Getting Addresses data...");
    	Map<String, Object> mapa = new HashMap<>();
    	
    	Pais pais = paisService.findById(idPais);
    	List<Estado> estados = estadoService.findByPais(pais);
    	
    	mapa.put("estados", estados);
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", mapa);
    	
    	return respuesta;
    }
	
	@GetMapping(value="/getCPData", produces = "application/json")
    public RespuestaAngularDTO getCPData(String cp) {
		RespuestaAngularDTO respuesta = new RespuestaAngularDTO();
		Map<String, Object> mapa = new HashMap<>();
		
		List<CodigoPostal> cps = codigoPostalService.findBySCP(cp);
		
		mapa.put("codigosPostales", cps);
		respuesta = new RespuestaAngularDTO(0, "", mapa);
		return respuesta;
	}
	
	@GetMapping(value="/getMunicipiosPorEstado", produces = "application/json")
    public RespuestaAngularDTO getMunicipiosPorEstado(Long id) {
		RespuestaAngularDTO respuesta = new RespuestaAngularDTO();
		Map<String, Object> mapa = new HashMap<>();
		
		Estado estado = estadoService.findById(id);
		List<Municipio> municipios = municipioService.findByEstado(estado);
		mapa.put("municipios", municipios);
		respuesta = new RespuestaAngularDTO(0, "", mapa);
		return respuesta;
	}
	
	@GetMapping(value="/getColoniasPorMunicipio", produces = "application/json")
    public RespuestaAngularDTO getColoniasPorMunicipio(Long id) {
		RespuestaAngularDTO respuesta = new RespuestaAngularDTO();
		Map<String, Object> mapa = new HashMap<>();
		
		Municipio municipio = municipioService.findById(id);
		List<CodigoPostal> cps = codigoPostalService.findByMunicipio(municipio);
		mapa.put("codigosPostales", cps);
		respuesta = new RespuestaAngularDTO(0, "", mapa);
		return respuesta;
	}

}
