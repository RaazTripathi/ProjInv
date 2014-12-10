package com.tss.ocean.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.tss.ocean.dto.Dateselecter;

public class FindateUtill

{

	public static void main(String c[]) throws ParseException
	{
		
		Date date1 = null;
		Date date2;
		switch(1)
		{
		

		case 1:	
			date1=new Date("04/01/2014");
			
			Dateselecter ds=new Dateselecter();
			
			ds.setFrom(date1);
			
			System.out.println(ds.getFormattedfrom());
		case 2:			
		case 3:			
		case 4:			
		case 5:		
			
		
			
		
		}
		
		
		
		
	}
	
	
	
	
}
