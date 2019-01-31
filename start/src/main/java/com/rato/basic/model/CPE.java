package com.rato.basic.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CPE")
public class CPE {
	private Long id;
	private String nombre;
	private String serie;
	private String suscriptor;
	private String firmware;
	private String ipAddress;
	private String macAddress;
	private Model model;
	
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
	@Column(name = "SERIE", nullable = false)
	public String getSerie() {
		return serie;
	}
	public void setSerie(String serie) {
		this.serie = serie;
	}
	
	@Basic
	@Column(name = "SUSCRIPTOR", nullable = false)
	public String getSuscriptor() {
		return suscriptor;
	}
	public void setSuscriptor(String suscrptor) {
		this.suscriptor = suscrptor;
	}
	
	@Basic
	@Column(name = "FIRMWARE", nullable = false)
	public String getFirmware() {
		return firmware;
	}
	public void setFirmware(String firmware) {
		this.firmware = firmware;
	}
	
	@ManyToOne
	@JoinColumn(name="MODEL_ID")
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
	
	@Basic
	@Column(name = "IP", nullable = false)
	public String getIpAddress() {
		return ipAddress;
	}
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
	
	@Basic
	@Column(name = "MAC", nullable = false)
	public String getMacAddress() {
		return macAddress;
	}
	public void setMacAddress(String macAddress) {
		this.macAddress = macAddress;
	}
}
