package com.tss.ocean.pojo;

import java.io.Serializable;
import java.math.BigDecimal;

public class Journal implements Serializable
{
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String date;
	private Integer journalNo;
	private BigDecimal price ;
	private String remark;
	private Boolean borb;
	private Boolean io;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Integer getJournalNo() {
		return journalNo;
	}
	public void setJournalNo(Integer journalNo) {
		this.journalNo = journalNo;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Boolean isBorb() {
		return borb;
	}
	public Boolean getBorb() {
		return borb;
	}
	public void setBorb(Boolean borb) {
		this.borb = borb;
	}
	public Boolean getIo() {
		return io;
	}
	public void setIo(Boolean io) {
		this.io = io;
	}
	
}
