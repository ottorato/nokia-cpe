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
@Table(name = "ESTADO")
public class Estado {
	private Long id;
	private String nombre;
	private Pais pais;
	
	public Estado() {
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

	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="PAIS_ID")
	public Pais getPais() {
		return pais;
	}

	public void setPais(Pais pais) {
		this.pais = pais;
	}

}
