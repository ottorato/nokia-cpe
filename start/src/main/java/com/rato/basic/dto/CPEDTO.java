package com.rato.basic.dto;

import java.util.Date;

public class CPEDTO {
		private Long id;
		private String serie;
		private String suscriptor;
		private String firmware;
		private String ipAddress;
		private String macAddress;
		private Long modelId;
		private Date ultimoContacto;
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getSerie() {
			return serie;
		}
		public void setSerie(String serie) {
			this.serie = serie;
		}
		public String getSuscriptor() {
			return suscriptor;
		}
		public void setSuscriptor(String suscriptor) {
			this.suscriptor = suscriptor;
		}
		public String getFirmware() {
			return firmware;
		}
		public void setFirmware(String firmware) {
			this.firmware = firmware;
		}
		public String getIpAddress() {
			return ipAddress;
		}
		public void setIpAddress(String ipAddress) {
			this.ipAddress = ipAddress;
		}
		public String getMacAddress() {
			return macAddress;
		}
		public void setMacAddress(String macAddress) {
			this.macAddress = macAddress;
		}
		public Long getModelId() {
			return modelId;
		}
		public void setModelId(Long modelId) {
			this.modelId = modelId;
		}
		public Date getUltimoContacto() {
			return ultimoContacto;
		}
		public void setUltimoContacto(Date ultimoContacto) {
			this.ultimoContacto = ultimoContacto;
		}
}
