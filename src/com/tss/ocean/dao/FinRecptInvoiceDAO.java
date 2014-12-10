package com.tss.ocean.dao;

import java.util.List;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.tss.ocean.idao.IFinRecptinvoiceDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.pojo.FinRecptInvoice;
import com.tss.ocean.pojo.Invoice;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

/**
 * Modifies the facility to get invoices on the basis of cash/bank mode of
 * payment of the invoice in addition to the available methods.
 * 
 * @author sumit bisht
 *
 */
@Repository("FinRecptinvoiceDAO")
public class FinRecptInvoiceDAO extends GenericDAOImpl<FinRecptInvoice, Integer> implements
		IFinRecptinvoiceDAO {

	static final Logger log = LoggerFactory.getLogger(GenericDAOImpl.class);

	@Override
	public List<FinRecptInvoice> getCollectionByType(int  a) {
		
		
		return null;
	}
}
