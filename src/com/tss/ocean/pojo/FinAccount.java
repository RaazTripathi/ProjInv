package com.tss.ocean.pojo;

import java.io.Serializable;

public class FinAccount  implements Serializable
{

int id ;
int type;
String name;
String number;
float limits;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getType() {
	return type;
}
public void setType(int type) {
	this.type = type;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getNumber() {
	return number;
}
public void setNumber(String number) {
	this.number = number;
}
public float getLimits() {
	return limits;
}
public void setLimits(float limits) {
	this.limits = limits;
}
	
	
}
