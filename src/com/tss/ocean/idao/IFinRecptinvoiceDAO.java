package com.tss.ocean.idao;

import java.util.List;

import com.techshark.hibernate.ibase.GenericDAO;
import com.tss.ocean.pojo.FinRecptInvoice;
import com.tss.ocean.pojo.Invoice;

public abstract interface IFinRecptinvoiceDAO extends GenericDAO<FinRecptInvoice, Integer> {

	public List<FinRecptInvoice> getCollectionByType(int  a);

}
