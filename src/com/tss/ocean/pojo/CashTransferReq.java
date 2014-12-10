package com.tss.ocean.pojo;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class CashTransferReq  implements Serializable{

	int id;
	float amount;
	
	int fromacc;
	int toacc;
	
	int finyear;
	
	public int getFinyear() {
		return finyear;
	}

	public void setFinyear(int finyear) {
		this.finyear = finyear;
	}

	String fromaccname;
	String toaccname;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")

	Date date;
	
	public int getFromacc() {
		return fromacc;
	}

	public void setFromacc(int fromacc) {
		this.fromacc = fromacc;
	}

	public int getToacc() {
		return toacc;
	}

	public void setToacc(int toacc) {
		this.toacc = toacc;
	}

	public String getFromaccname() {
		return fromaccname;
	}

	public void setFromaccname(String fromaccname) {
		this.fromaccname = fromaccname;
	}

	public String getToaccname() {
		return toaccname;
	}

	public void setToaccname(String toaccname) {
		this.toaccname = toaccname;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	String remark;
	int approvelevel1;
	int approvelevel2;
	int approvelevel3;
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public int getApprovelevel1() {
		return approvelevel1;
	}

	public void setApprovelevel1(int approvelevel1) {
		this.approvelevel1 = approvelevel1;
	}

	public int getApprovelevel2() {
		return approvelevel2;
	}

	public void setApprovelevel2(int approvelevel2) {
		this.approvelevel2 = approvelevel2;
	}

	public int getApprovelevel3() {
		return approvelevel3;
	}

	public void setApprovelevel3(int approvelevel3) {
		this.approvelevel3 = approvelevel3;
	}

	@Override
	public String toString() {
		return "CashTransferReq [id=" + id + ", amount=" + amount
				+ ", fromacc=" + fromacc + ", toacc=" + toacc
				+ ", fromaccname=" + fromaccname + ", toaccname=" + toaccname
				+ ", date=" + date + ", remark=" + remark + ", approvelevel1="
				+ approvelevel1 + ", approvelevel2=" + approvelevel2
				+ ", approvelevel3=" + approvelevel3 + "]";
	}



}
