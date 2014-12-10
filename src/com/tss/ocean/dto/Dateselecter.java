package com.tss.ocean.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Dateselecter {
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	Date from;

	public Date getFrom() {
		return from;
	}

	public void setFrom(Date from) {
		this.from = from;
	}

	public Date getTo() {
		return to;
	}

	public void setTo(Date to) {
		this.to = to;
	}

	@DateTimeFormat(pattern = "dd/MM/yyyy")
	Date to;

	public String getFormattedfrom() {
		String date = "";
		if (getFrom() != null) {

			SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy");
			date = sdf.format(getFrom());
		}
		return date;
	}

	public String getFormattedto() {
		String date = "";
		if (getFrom() != null) {
			SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy");
			date = sdf.format(getTo());
		}
		return date;
	}

	String finyearStart;
	String finyearEnd;

	public void setfinyear(int a)
{
	switch(a)
	{
	case 1: this.finyearStart="2014-04-01";
	this.finyearEnd="2015-03-31";
	break;
		case 2: this.finyearStart="2015-04-01";
		this.finyearEnd="2016-03-31";
		break;
			case 3: this.finyearStart="016-04-01";
			this.finyearEnd="2017-03-31";
			break;
				case 4: this.finyearStart="2017-04-01";
				this.finyearEnd="2018-03-31";
				break;
					case 5: this.finyearStart="2018-04-01";
					this.finyearEnd="2019-03-31";
					break;
						case 6: this.finyearStart="2019-04-01";
						this.finyearEnd="2020-03-31";
						break;
						
						
						/*default:
						 this.finyearStart="01/04/2014";
						this.finyearEnd="31/03/2015";
						break;*/

	}
	
	
}

	public String getFinyearStart() {
		return finyearStart;
	}

	public void setFinyearStart(String finyearStart) {
		this.finyearStart = finyearStart;
	}

	public String getFinyearEnd() {
		return finyearEnd;
	}

	public void setFinyearEnd(String finyearEnd) {
		this.finyearEnd = finyearEnd;
	}

}
