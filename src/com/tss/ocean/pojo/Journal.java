package com.tss.ocean.pojo;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Journal implements Serializable
{

	
	private static final long serialVersionUID = -6929422014912532671L;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date date;
	private int no;
	private int journalNo;
	private float price ;
	private String remark;
	private int borb;
	private int io;
	
	private int subacctype;
	private String type;
	
	int finyear;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getFinyear() {
		return finyear;
	}
	public void setFinyear(int finyear) {
		this.finyear = finyear;
	}
	public int getJournalNo() {
		return journalNo;
	}
	public void setJournalNo(int journalNo) {
		this.journalNo = journalNo;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getId() {
		return no;
	}
	public void setId(int no) {
		this.no = no;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public int getBorb() {
		return borb;
	}
	public void setBorb(int borb) {
		this.borb = borb;
	}
	public int getIo() {
		return io;
	}
	public void setIo(int io) {
		this.io = io;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getSubacctype() {
		return subacctype;
	}
	public void setSubacctype(int subacctype) {
		this.subacctype = subacctype;
	}
	
}
