package com.tss.ocean.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

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
import com.tss.ocean.dao.FinAccountDAO;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IEmployeeCategoryDAO;
import com.tss.ocean.idao.IEmployeesDAO;
import com.tss.ocean.idao.IFinAccountDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.idao.IPurchaseApproverDAO;
import com.tss.ocean.idao.IPurrequisitionDAO;
import com.tss.ocean.idao.IPurrequisitiondtDAO;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.FinAccount;
import com.tss.ocean.pojo.Invoice;



@Controller
public class FinAccController {
	@Autowired
	IInvoiceDAO invoiceDAO;

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
	/* 58: */private IFinAccountDAO finAccDAO;
	/* 59: */@Autowired
	/* 60: */private IEmployeesDAO employeesDAO;
	/* 61: */@Autowired
	/* 62: */IEmployeeCategoryDAO employeeCategoryDAO;
	private static final Logger logger = LoggerFactory.getLogger(financeMenuControllers.class);

	
	@RequestMapping(value = { "/finacc.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView revenue(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale) throws Exception {
		logger.info("************************************");
		List<FinAccount> finacc = this.finAccDAO.getList();
		logger.info("returned with "+finacc.size()+" cash invoices");
		
		ModelAndView mav = new ModelAndView("fin_acc_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		
		System.out.println("***********************************finacc"+finacc.size());
		mav.getModelMap().put("finacc", finacc);
		return mav;
	}
	
	
	/**
	 * Add financial account form, now pre-populated with mainTypes
	 **/
	@RequestMapping(value = { "/addfinacc.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView addFinancialAccount(@ModelAttribute("finAcc") FinAccount account) throws Exception {
		logger.info("Calling the form for the creation of financial account");
		List<FinAccount> existingTypes = finAccDAO.getMainAccounts();
		logger.info("Found "+existingTypes.size()+" main accounts.");
		ModelAndView addFinAcc = new ModelAndView("add_fin_accounts");
		addFinAcc.getModelMap().put("types", existingTypes);
		return addFinAcc;
	}


	@RequestMapping(value = { "/addfinacc.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public String addasset(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,@ModelAttribute("finacc") FinAccount finacc) throws Exception {
		
		
		
		
		
		this.finAccDAO.insert(finacc);
		
		return "redirect:finacc.html";
	}
	
	
	
	
}
