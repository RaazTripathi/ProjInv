package com.tss.ocean.pojo;

import java.io.Serializable;

public class Borrow implements Serializable 
{
	int id;
	Employees employee;
	float amount;
	String purpose;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Float.floatToIntBits(amount);
		result = prime * result
				+ ((employee == null) ? 0 : employee.hashCode());
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Borrow other = (Borrow) obj;
		if (Float.floatToIntBits(amount) != Float.floatToIntBits(other.amount))
			return false;
		if (employee == null) {
			if (other.employee != null)
				return false;
		} else if (!employee.equals(other.employee))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getPurpose() {
		return purpose;
	}
	public Borrow() {
		super();
	}
	public Borrow(int id, Employees employee, float amount, String purpose) {
		super();
		this.id = id;
		this.employee = employee;
		this.amount = amount;
		this.purpose = purpose;
	}
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	public Employees getEmployee() {
		return employee;
	}
	public void setEmployee(Employees employee) {
		this.employee = employee;
	}
	
	

}
