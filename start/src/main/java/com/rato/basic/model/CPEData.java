package com.rato.basic.model;

import java.util.Date;

public class CPEData {
	private CPE cpe;
	private Date date = new Date();
	private boolean managed;
	private boolean reachable;
	
	public CPEData() {
		super();
	}

	public CPEData(CPE cpe) {
		super();
		this.cpe = cpe;
	}

	public CPE getCpe() {
		return cpe;
	}

	public void setCpe(CPE cpe) {
		this.cpe = cpe;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean isManaged() {
		return managed;
	}

	public void setManaged(boolean managed) {
		this.managed = managed;
	}

	public boolean isReachable() {
		return reachable;
	}

	public void setReachable(boolean reachable) {
		this.reachable = reachable;
	}

}
