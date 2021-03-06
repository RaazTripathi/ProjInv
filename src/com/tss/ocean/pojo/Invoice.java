package com.tss.ocean.pojo;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Invoice implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Integer id;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")

	private Date date;
	private String buyerName;
	private String address;
	private Integer boxMode;
	private BigDecimal discount;
	private BigDecimal tax;
	private Number grossAmount;
	private Integer item_id;
	private Integer quantity;
	private String mealType;
	
	private int mealaccount;
	
	
private int	closebycashier;
	
	public int getFinyear() {
		return finyear;
	}

	public void setFinyear(int finyear) {
		this.finyear = finyear;
	}

	int finyear;
	
	public Invoice(){
	}

	public Invoice(Integer id, Date date, String buyerName, String address, Integer boxMode, BigDecimal discount, BigDecimal tax, Number grossAmount, Integer item_id, Integer quantity){
		try {
			this.id = id;
			this.date = date;
			this.buyerName = buyerName;
			this.address = address;
			this.boxMode = boxMode;
			this.discount = discount;
			this.tax = tax;
			this.grossAmount = grossAmount;
			this.item_id = item_id;
			this.quantity = quantity;
		} catch (Exception e) {
			System.out.println("Exception in initializing an invoice: "+e.getMessage());
		}
	}

	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getBuyerName() {
		return buyerName;
	}
	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getBoxMode() {
		return boxMode;
	}
	public void setBoxMode(Integer boxMode) {
		this.boxMode = boxMode;
	}
	public BigDecimal getDiscount() {
		return discount;
	}
	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}
	public BigDecimal getTax() {
		return tax;
	}
	public void setTax(BigDecimal tax) {
		this.tax = tax;
	}
	public Number getGrossAmount() {
		return grossAmount;
	}
	public void setGrossAmount(Number grossAmount) {
		this.grossAmount = grossAmount;
	}
	public Integer getItem_id() {
		return item_id;
	}
	public void setItem_id(Integer item_id) {
		this.item_id = item_id;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public String getMealType() {
		return mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	@Override
	public String toString(){
		String string = "";
		if(this.id!=null)
			string += this.id;
		if(this.date!=null)
			string += this.date.toString();
		if(this.buyerName!=null)
			string += this.buyerName;
		if(this.address!=null)
			string += this.address;
		if(this.boxMode!=null)
			string += boxMode;
		if(this.discount!=null)
			string += this.discount;
		if(this.tax!=null)
			string += this.tax;
		if(this.grossAmount!=null)
			string += this.grossAmount;
		if(this.item_id!=null)
			string += this.item_id;
		if(this.quantity!=null)
			string += this.quantity;
		if(this.mealType!=null)
			string += this.mealType;
		return string;
	}

	public int getMealaccount() {
		return mealaccount;
	}

	public void setMealaccount(int mealaccount) {
		this.mealaccount = mealaccount;
	}

	public int getClosebycashier() {
		return closebycashier;
	}

	public void setClosebycashier(int closebycashier) {
		this.closebycashier = closebycashier;
	}

}
