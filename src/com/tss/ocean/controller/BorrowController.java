package com.tss.ocean.controller;

import java.util.List;
import java.util.Locale;

import org.hibernate.jdbc.BorrowedConnectionProxy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.dao.AssetDAO;
import com.tss.ocean.dao.BorrowDAO;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IEmployeeCategoryDAO;
import com.tss.ocean.idao.IEmployeesDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.idao.IPurchaseApproverDAO;
import com.tss.ocean.idao.IPurrequisitionDAO;
import com.tss.ocean.idao.IPurrequisitiondtDAO;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.Borrow;
import com.tss.ocean.pojo.Invoice;



@Controller
public class BorrowController {
	@Autowired
	IInvoiceDAO invoiceDAO;
	@Autowired
	BorrowDAO borrowDao;
	@Autowired
	private IPurchaseApproverDAO purchaseApproversDAO;
	@Autowired
	private IPurrequisitionDAO purrequisitionDAO;

	/* 51: */@Autowired
	/* 52: */private IPurrequisitiondtDAO purrequisitiondtDAO;
	/* 53: */@Autowired
	/* 54: */private IAccountsDAO accountsDAO;
	/* 55: */@Autowired
	/* 56: */private MessageSource messageSource;
	/* 57: */@Autowired
	/* 58: */private AssetDAO assetDAO;
	/* 59: */@Autowired
	/* 60: */private IEmployeesDAO employeesDAO;
	/* 61: */@Autowired
	/* 62: */IEmployeeCategoryDAO employeeCategoryDAO;
	private static final Logger logger = LoggerFactory.getLogger(BorrowedConnectionProxy.class);

	
	@RequestMapping(value = { "/borrow.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView revenue( Locale locale) throws Exception {
		logger.info("************************************");
		List<Borrow> borrow = this.borrowDao.getList();
		logger.info("returned with "+borrow.size()+" cash invoices");
		
	
				ModelAndView mav = new ModelAndView("borrow_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("borrow", borrow);
	
		return mav;
	}
	
	
	
	
	@RequestMapping(value = { "/addborrow.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView addassetform(@ModelAttribute("borrow") Borrow borrow) throws Exception {
		logger.info("************************************");
		
		ModelAndView mav = new ModelAndView("add_borrow");
	
	mav.getModelMap().put("emplist", employeesDAO.getList());
		
		
	return mav;
		
	}

	
	@RequestMapping(value = { "/addborrow.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView addasset(@ModelAttribute("borrow") Borrow borrow) throws Exception {
		logger.info("************************************"+borrow.getAmount()+borrow.getPurpose()+borrow.getEmployee().getId());
		
		
		
		
		
		this.borrowDao.insert(borrow);
		List<Borrow> borrows = this.borrowDao.getList();
		logger.info("returned with "+borrows.size()+" cash invoices");
		
	
				ModelAndView mav = new ModelAndView("borrow_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("borrow", borrows);
		return mav;
	}

	
	
	
}
