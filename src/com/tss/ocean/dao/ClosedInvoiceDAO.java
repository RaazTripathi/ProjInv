package com.tss.ocean.dao;

import java.util.List;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.tss.ocean.idao.IClosedInvoiceDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.pojo.ClosedInvoice;
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
@Repository("closedinvoiceDAO")
public class ClosedInvoiceDAO extends GenericDAOImpl<ClosedInvoice, Integer> implements
		IClosedInvoiceDAO {

	static final Logger log = LoggerFactory.getLogger(GenericDAOImpl.class);

	
}
