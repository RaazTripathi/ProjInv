package com.tss.ocean.pojo;

import java.io.Serializable;

public class Journal implements Serializable
{

	
	private static final long serialVersionUID = -6929422014912532671L;
	
	private String date;
	private int no;
	private int journalNo;
	private float price ;
	private String remark;
	private int borb;
	private int io;
	
	public int getJournalNo() {
		return journalNo;
	}
	public void setJournalNo(int journalNo) {
		this.journalNo = journalNo;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
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
	
}
