package com.tss.ocean.pojo;

import java.io.Serializable;

public class AccountValue implements Serializable
{
	int id ;
	int accid;
	int finyear;
	
	public int getFinyear() {
		return finyear;
	}
	public void setFinyear(int finyear) {
		this.finyear = finyear;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAccid() {
		return accid;
	}
	public void setAccid(int accid) {
		this.accid = accid;
	}
	public String getAccName() {
		return accName;
	}
	public void setAccName(String accName) {
		this.accName = accName;
	}
	public double getValue() {
		return value;
	}
	public void setValue(double value) {
		this.value = value;
	}
	String accName;
	double value;
	
	
	
		

}
