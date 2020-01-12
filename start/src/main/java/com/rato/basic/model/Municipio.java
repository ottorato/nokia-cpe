package com.rato.basic.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MUNICIPIO")
public class Municipio {
	private Long id;
	private String nombre;
	private Estado estado;
	
	public Municipio() {
		super();
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

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="ESTADO_ID")
	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

}
