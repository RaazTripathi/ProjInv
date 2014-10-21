package com.tss.ocean.pojo;

import java.io.Serializable;
import java.util.Date;

public class Journal implements Serializable
{

	
	public int getJournalNo() {
		return journalNo;
	}
	public void setJournalNo(int journalNo) {
		this.journalNo = journalNo;
	}
	Date date;
	int no;
	int journalNo;
	float price ;
	String remark;
	int borb;
	int io;
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
