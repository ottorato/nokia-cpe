package com.rato.basic.dto;

public class RespuestaAngularDTO {
	private Integer codigo;
	private String mensaje;
	private Object objeto;
	
	
	public RespuestaAngularDTO(Integer codigo, String mensaje) {
		super();
		this.codigo = codigo;
		this.mensaje = mensaje;
	}
	public RespuestaAngularDTO(Integer codigo, String mensaje, Object objeto) {
		super();
		this.codigo = codigo;
		this.mensaje = mensaje;
		this.objeto = objeto;
	}
	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public Object getObjeto() {
		return objeto;
	}
	public void setObjeto(Object objeto) {
		this.objeto = objeto;
	}
}
