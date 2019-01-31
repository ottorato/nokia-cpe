package com.rato.basic.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PAIS")
public class Pais {
	private Long id;
	private String nombre;
	private String nombreCorto;
	
	public Pais() {
		super();
	}
	
	public Pais(Long id, String nombre, String nombreCorto) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.nombreCorto = nombreCorto;
	}

	@Id
	@Column(name = "ID", nullable = false)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Basic
	@Column(name = "NOMBRE", nullable = false)
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	@Basic
	@Column(name = "NOMBRECORTO")
	public String getNombreCorto() {
		return nombreCorto;
	}
	public void setNombreCorto(String nombreCorto) {
		this.nombreCorto = nombreCorto;
	}

}
