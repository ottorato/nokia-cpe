package com.rato.basic.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rato.basic.dto.RespuestaAngularDTO;
import com.rato.basic.model.CPE;
import com.rato.basic.model.CPEData;
import com.rato.basic.model.EndPoint;

@RestController
@RequestMapping("/tools")
public class ToolsController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping(value="/getAddressData", produces = "application/json")
    public RespuestaAngularDTO getAddressData() {
    	logger.info("Getting Addresses data...");
    	Map<String, Object> mapa = new HashMap<>();
    	List<CPEData> datosAddresses = new ArrayList<>();
    	
    	
    	
    	RespuestaAngularDTO respuesta = new RespuestaAngularDTO(0, "", mapa);
    	
    	return respuesta;
    }

}
