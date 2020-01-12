package com.rato.basic.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = {"/", "/app", "/cpe", "/catalogs", "/address"}, method = RequestMethod.GET)
	public ModelAndView main() {
		logger.info("Ctrl working fine.");
		
		HashMap<String, String> hm = new HashMap<>();
		hm.put("jQueryVersion", "3.3.1");
		hm.put("angularVersion", "1.5.6");
		hm.put("bootstrapUIVersion", "2.5.0");
		hm.put("bootstrapVersion", "3.3.4");
		return new ModelAndView("appBase", hm);
	}
	
	
	public ModelAndView error() {
		logger.error("Ctrl error");
		return new ModelAndView("main");
	}
	
	@RequestMapping(value = "error", method = RequestMethod.GET)
	@ResponseBody
	  public String handleError(HttpServletRequest request) {
	      Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
	      Exception exception = (Exception) request.getAttribute("javax.servlet.error.exception");
	      return String.format("<html><body><h2>Error Page</h2><div>Status code: <b>%s</b></div>"
	                      + "<div>Exception Message: <b>%s</b></div><body></html>",
	              statusCode, exception==null? "N/A": exception.getMessage());
	  }

	  public String getErrorPath() {
	      return "/error";
	  }
}
