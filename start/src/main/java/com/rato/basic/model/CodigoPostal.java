package com.rato.basic.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CODIGOPOSTAL",  indexes = {@Index(name = "cp_index00",  columnList="CP", unique = false)})
public class CodigoPostal {
	private Long id;
	private String sCP;
	private String tipoAsentamiento;
	private String asentamiento;
	private Municipio municipio;
	
	public CodigoPostal() {
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
	@Column(name = "CP", nullable = false)
	public String getsCP() {
		return sCP;
	}

	public void setsCP(String sCP) {
		this.sCP = sCP;
	}

	@Basic
	@Column(name = "TIPO_ASENTAMIENTO", nullable = false)
	public String getTipoAsentamiento() {
		return tipoAsentamiento;
	}

	public void setTipoAsentamiento(String tipoAsentamiento) {
		this.tipoAsentamiento = tipoAsentamiento;
	}

	@Basic
	@Column(name = "ASENTAMIENTO", nullable = false)
	public String getAsentamiento() {
		return asentamiento;
	}

	public void setAsentamiento(String asentamiento) {
		this.asentamiento = asentamiento;
	}

	@ManyToOne
	@JoinColumn(name="MUNICIPIO_ID")
	public Municipio getMunicipio() {
		return municipio;
	}

	public void setMunicipio(Municipio municipio) {
		this.municipio = municipio;
	}

}
