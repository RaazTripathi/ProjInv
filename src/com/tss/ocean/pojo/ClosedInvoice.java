package com.tss.ocean.pojo;

import java.io.Serializable;
import java.util.Date;

public class ClosedInvoice implements Serializable 
{
int id ;

Date closedDate;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public Date getClosedDate() {
	return closedDate;
}

public void setClosedDate(Date closedDate) {
	this.closedDate = closedDate;
}

public String getCustNames() {
	return custNames;
}

public void setCustNames(String custNames) {
	this.custNames = custNames;
}

public float getAmountt() {
	return amountt;
}

public void setAmountt(float amountt) {
	this.amountt = amountt;
}

String custNames=" ";

float amountt;





}
