package com.tss.ocean.controller;
import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.pojo.Invoice;
import com.tss.ocean.pojo.Item;

/**
 * Presents the control flow of the actions present inside the invoicing
 * operations
 * 
 * @author sumit bisht
 */
@Controller
public class InvoiceController {

	private static final Logger logger = LoggerFactory.getLogger(InvoiceController.class);
	
	@Autowired
	IInvoiceDAO invoiceDAO;
	
	@Autowired
	IItemDAO itemDAO;

	/*
	 * Maps to the invoice filling form
	 */
	@RequestMapping(value = { "/invoice_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView invoiceEntryDisplay(String flashMessage) throws Exception {
		logger.info("Initializing the invoice entry view.");
		ModelAndView modelAndView = new ModelAndView("invoice_data_entry");
		Invoice invoice = new Invoice();
		List<Item> itemList = null;
		try {
			logger.info("Fetching items to populate the invoice.");
			itemList = this.itemDAO.getList();			
		} catch (Exception e) {
			logger.error("Error in fetching items for the invoice: "+e.getMessage());
			logger.warn("Since no item was fetched, so creating the invoice form without any item selection");
		}
		modelAndView.getModelMap().put("invoice", invoice);
		modelAndView.getModelMap().put("flash", flashMessage);
		modelAndView.getModelMap().put("items", itemList);
		return modelAndView;
	}
	
	
	/*
	 * Provides the report of the cash/box collections of the different reports
	 */
	@RequestMapping(value = { "/cash_collections.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listCashCollections(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale) throws Exception {
		logger.info("Starting the save of data.");
		List<Invoice> invoices = this.invoiceDAO.getCollectionByType(true);
		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("header", "Cash based invoice");
		return mav;
	}	
	/*
	 * Provides the report of the bank collections of the different reports
	 */
	@RequestMapping(value = { "/bank_collections.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listBankCollections(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale) throws Exception {
		logger.info("Starting the save of data.");
		List<Invoice> invoices = this.invoiceDAO.getCollectionByType(false);
		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("header", "Bank based invoice");
		return mav;
	}	
	/*
	 * Makes the invoice editable
	 */
	@RequestMapping(value = { "/edit-invoice.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView invoiceEditDisplay(@RequestParam("id") int id, Locale locale, @RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error) throws Exception {
		logger.info("Fetching the invoice from the database for editing.");
		Invoice existingInvoice = this.invoiceDAO.getRecordByPrimaryKey(id);
		List<Item> itemList = null;
		try {
			logger.info("Fetching items for the invoice.");
			itemList = this.itemDAO.getList();			
		} catch (Exception e) {
			logger.error("Error in fetching items for the invoice: "+e.getMessage());
		}
		ModelAndView modelAndView = new ModelAndView("invoice_data_entry");
		modelAndView.getModelMap().put("invoice", existingInvoice);
		modelAndView.getModelMap().put("items", itemList);
		return modelAndView;
	}
	
	
	/*
	 * Updates the invoice data and informs the user of the process
	 */
	@RequestMapping(value = { "/updateInvoice.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView updateInvoiceData(@ModelAttribute("invoice") @Valid Invoice invoice, BindingResult result, ModelMap model, Locale locale) throws Exception {
		logger.info("Updating invoice.");
		String status="";
		int updationResult = this.invoiceDAO.update(invoice);
		if(updationResult>0){
			status = "Updated the invoice data";
		}else{
			status = "Error in updation of invoice data.";
			logger.error(status);
		}

		return invoiceEntryDisplay(status);
	}
}