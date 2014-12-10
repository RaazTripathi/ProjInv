package com.tss.ocean.pojo;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class FinRecptInvoice implements Serializable {
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	int id;
	
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
	public int getReceptno() {
		return receptno;
	}
	public void setReceptno(int receptno) {
		this.receptno = receptno;
	}
	public Date getRecptdate() {
		return recptdate;
	}
	public void setRecptdate(Date recptdate) {
		this.recptdate = recptdate;
	}
	private Date date;
	private int no;
	private int journalNo;
	private float price ;
	private String remark;
	int receptno;
	int apelevel1;
	int apelevel2;
	private int subacctype;
	public int getApelevel1() {
		return apelevel1;
	}
	public void setApelevel1(int apelevel1) {
		this.apelevel1 = apelevel1;
	}
	public int getApelevel2() {
		return apelevel2;
	}
	public void setApelevel2(int apelevel2) {
		this.apelevel2 = apelevel2;
	}
	public int getApelevel3() {
		return apelevel3;
	}
	public void setApelevel3(int apelevel3) {
		this.apelevel3 = apelevel3;
	}
	public int getApelevel4() {
		return apelevel4;
	}
	public void setApelevel4(int apelevel4) {
		this.apelevel4 = apelevel4;
	}
	int apelevel3;
	int apelevel4;

	
	
	
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	Date recptdate;
	
	
	
	String type;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getJournalNo() {
		return journalNo;
	}
	public void setJournalNo(int journalNo) {
		this.journalNo = journalNo;
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
	public int getSubacctype() {
		return subacctype;
	}
	public void setSubacctype(int subacctype) {
		this.subacctype = subacctype;
	}
	private int borb;
	private int io;
	
}
