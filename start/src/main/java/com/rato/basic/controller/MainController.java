package com.rato.basic.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = {"/", "/app", "/cpe"}, method = RequestMethod.GET)
	public ModelAndView main() {
		logger.info("Ctrl working fine.");
		
		HashMap<String, String> hm = new HashMap<>();
		hm.put("jQueryVersion", "3.3.1");
		hm.put("angularVersion", "1.5.6");
		hm.put("bootstrapUIVersion", "2.5.0");
		hm.put("bootstrapVersion", "3.3.4");
		return new ModelAndView("appBase", hm);
	}
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	public ModelAndView error() {
		System.out.println("Ctrl error");
		return new ModelAndView("main");
	}
}
