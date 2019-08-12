package com.rato.basic.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CPEDATA", indexes = {
        @Index(columnList = "rec_date", name = "date_hidx")
})

public class CPEData {
	private Long id;
	private CPE cpe;
	private Date date = new Date();
	private boolean managed;
	private boolean reachable;
	private boolean radio;
	private boolean frecuency5GHz;
	private boolean dhcp;
	private boolean nat;
	
	public CPEData() {
		super();
	}

	public CPEData(CPE cpe) {
		super();
		this.cpe = cpe;
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

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="CPE_ID")
	public CPE getCpe() {
		return cpe;
	}

	public void setCpe(CPE cpe) {
		this.cpe = cpe;
	}

	@Basic
	@Column(name = "REC_DATE", nullable = false)
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Basic
	@Column(name = "MANAGED", nullable = false)
	public boolean isManaged() {
		return managed;
	}

	public void setManaged(boolean managed) {
		this.managed = managed;
	}

	@Basic
	@Column(name = "REACHABLE", nullable = false)
	public boolean isReachable() {
		return reachable;
	}

	public void setReachable(boolean reachable) {
		this.reachable = reachable;
	}

	@Basic
	@Column(name = "RADIO", nullable = false)
	public boolean isRadio() {
		return radio;
	}

	public void setRadio(boolean radio) {
		this.radio = radio;
	}

	@Basic
	@Column(name = "F5GHZ", nullable = false)
	public boolean isFrecuency5GHz() {
		return frecuency5GHz;
	}

	public void setFrecuency5GHz(boolean frecuency5gHz) {
		frecuency5GHz = frecuency5gHz;
	}

	@Basic
	@Column(name = "DHCP", nullable = false)
	public boolean isDhcp() {
		return dhcp;
	}

	public void setDhcp(boolean dhcp) {
		this.dhcp = dhcp;
	}

	@Basic
	@Column(name = "NAT", nullable = false)
	public boolean isNat() {
		return nat;
	}

	public void setNat(boolean nat) {
		this.nat = nat;
	}

}
