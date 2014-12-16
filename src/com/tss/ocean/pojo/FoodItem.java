package com.tss.ocean.pojo;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.validation.constraints.DecimalMin;

public class FoodItem implements Serializable {
	private Integer id;
	private String name;
	private String type;
	@DecimalMin(value = "0", message = "Price cannot be less than 0 ")
	private BigDecimal price;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
}
