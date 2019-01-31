package com.rato.basic.model;

import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "BRAND")
public class Brand {
	private Long id;
	private String nombre;
	private String OUI;
	private Pais pais;
	private List<Model> modelos;
	
	
	public Brand() {
		super();
	}

	public Brand(String nombre, String oUI, Pais pais) {
		super();
		this.nombre = nombre;
		OUI = oUI;
		this.pais = pais;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
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
	@Column(name = "OUI", nullable = false, unique = true)
	public String getOUI() {
		return OUI;
	}
	public void setOUI(String oUI) {
		OUI = oUI;
	}
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="PAIS_ID")
	public Pais getPais() {
		return pais;
	}
	public void setPais(Pais pais) {
		this.pais = pais;
	}
	
	@OneToMany(targetEntity=Model.class, mappedBy = "brand", cascade = CascadeType.ALL, fetch=FetchType.LAZY)
	@JsonIgnore
	public List<Model> getModelos() {
		return modelos;
	}
	public void setModelos(List<Model> modelos) {
		this.modelos = modelos;
	}
	
	
}
