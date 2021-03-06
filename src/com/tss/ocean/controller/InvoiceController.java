package com.tss.ocean.controller;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.dao.ClosedInvoiceDAO;
import com.tss.ocean.dto.Dateselecter;
import com.tss.ocean.idao.IFinAccountDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.pojo.ClosedInvoice;
import com.tss.ocean.pojo.FinAccount;
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
	
	@Autowired
	IFinAccountDAO finAccDAO;
	
	@Autowired
	
	ClosedInvoiceDAO closedinvoiceDao;

	/*
	 * Maps to the invoice filling form
	 */
	@RequestMapping(value = { "/invoice_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_CASHIER','ROLE_ADMIN')")
	public ModelAndView invoiceEntryDisplay(String flashMessage, Invoice invoice) throws Exception {
		logger.info("Initializing the invoice entry view.");
		ModelAndView modelAndView = new ModelAndView("invoice_data_entry");
		if(invoice==null)
			invoice = new Invoice();
		List<Item> itemList = null;
		List<FinAccount> existingTypes = null;
		try {
			logger.info("Fetching items to populate the invoice.");
			itemList = this.itemDAO.getList();
			existingTypes = finAccDAO.getMainAccounts();
		} catch (Exception e) {
			logger.error("Error in fetching items/accounts for the invoice: "+e.getMessage());
			logger.warn("Since no item was fetched, so creating the invoice form without any item selection");
		}
		modelAndView.getModelMap().put("invoice", invoice);
		modelAndView.getModelMap().put("flash", flashMessage);
		modelAndView.getModelMap().put("items", itemList);
		modelAndView.getModelMap().put("types", existingTypes);
		return modelAndView;
	}
	
	/*
	 * Maps to the incoming data from the invoice form
	 */
	@RequestMapping(value = { "/addInvoice.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView saveInvoiceData(@ModelAttribute("invoice") @Valid Invoice invoice, BindingResult result, ModelMap model, Locale locale) throws Exception {
		logger.info("Starting the save of data.");
		String status="";
		if(!result.hasErrors()){
			status = "received the invoice data ";
			logger.info(status+invoice.toString());
			int i = (Integer)this.invoiceDAO.insert(invoice).intValue();
			logger.info("Data inserted successfully with value: "+i);
		}else{
			status = "Received errors on submitting the invoice form.";
			logger.error(status);
		}

		return invoiceEntryDisplay(status, invoice);
	}	
	/*
	 * Provides the report of the cash/box collections of the different reports
	 */
	@RequestMapping(value = { "/cash_collections.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listCashCollections(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
		logger.info("Starting the save of data.");
/*		List<Invoice> invoices = this.invoiceDAO.getCollectionByType(1);
*/	
		int a= (Integer) session.getAttribute("finyear");

		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.boxMode=0 and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );
	
		
		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Cash based invoice");
		return mav;
	}
	/*
	 * Provides the report of the bank collections of the different reports
	 */
	@RequestMapping(value = { "/bank_collections.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listBankCollections(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
		logger.info("Starting the save of data.");
/*		List<Invoice> invoices = this.invoiceDAO.getCollectionByType(0);
*/	
		int a= (Integer) session.getAttribute("finyear");

		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.boxMode=0 and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );
	
		
		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Bank based invoice");
		return mav;
	}
	/*
	 * Provides the report of the cash/box collections within finance section
	 */
	@RequestMapping(value = { "/cash_vouchers.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listCashCollectionsOnFinanceMenu(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
	
		
		logger.info("Starting the save of data.");
		
		int a= (Integer) session.getAttribute("finyear");
		
		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.boxMode=1 and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );

		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Cash based invoice");
		return mav;
	}
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = { "/cashierclose.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView invoicesforclose(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
	
		
		logger.info("Starting the save of data.");
		
		int a= (Integer) session.getAttribute("finyear");
		
		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.closebycashier=0  " );

		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("cashierClose");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Cash based invoice");
		return mav;
	}

	
	
	@RequestMapping(value = { "/closedInvoice.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView closedInvoice(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
	
		
		logger.info("Starting the save of data.");
		
		int a= (Integer) session.getAttribute("finyear");
		
		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<ClosedInvoice> ci = closedinvoiceDao.getList();
				
		ModelAndView mav = new ModelAndView("closed_invoice_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", ci);
		mav.getModelMap().put("title_text", "Cash based invoice");
		return mav;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = { "/cashiercloseact.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView invoicesforclosed( @RequestParam int [] ids,   @RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
	
		
		ClosedInvoice ci=new ClosedInvoice();
		
		int i=0;
		while(i<ids.length)
		{
			Invoice invoice=invoiceDAO.getRecordByPrimaryKey(ids[i]); 
			invoice.setClosebycashier(1);
			
			ci.setAmountt( (ci.getAmountt()+ Float.parseFloat(invoice.getGrossAmount()+"")));
			
			ci.setClosedDate(new Date());
			
			ci.setCustNames(ci.getCustNames()+ invoice.getBuyerName()+" ,");
//			invoiceDAO.update(invoice);
			i++;
		}
		closedinvoiceDao.insert(ci);
		
		logger.info("Starting the save of data.");
		
		int a= (Integer) session.getAttribute("finyear");
		
		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.closebycashier=0 and  " );

		ModelAndView mav = new ModelAndView("cashierClose");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Cash based invoice");
		return mav;
	}

	
	
	
	
	
	
	
	
	
	/*
	 * Provides the report of the bank collections within finance section
	 */
	@RequestMapping(value = { "/bank_vouchers.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView listBankCollectionsOnFinanceMenu(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale, HttpSession session) throws Exception {
		logger.info("Starting the save of data.");
		int a= (Integer) session.getAttribute("finyear");

		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.boxMode=0 and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );
		logger.info("returned with "+invoices.size()+" bank invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Bank based invoice");
		return mav;
	}
	
	@RequestMapping(value = { "/view_vouchers.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView view_vouchers(@RequestParam(value="success", required=false) String success,@RequestParam("id")int id, @RequestParam(value="error", required=false) String error, Locale locale,HttpSession session) throws Exception {
		logger.info("Starting the save of data.");
/*		List<Invoice> invoices = this.invoiceDAO.getListByKeyandValue("mealaccount", id);
*/	
		
		int a= (Integer) session.getAttribute("finyear");

		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.mealaccount="+id+" and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );

		
		
		logger.info("returned with "+invoices.size()+" cash invoices");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Bank based invoice");
		return mav;
	}
	

	/**
	 * Provides invoice related with that main finance account
	 * This main finance account is some other account other than bank
	 */
	@RequestMapping(value = { "/account_vouchers.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView view_specific_vouchers(@RequestParam(value="success", required=false) String success,@RequestParam("id")int id, @RequestParam(value="error", required=false) String error, Locale locale) throws Exception {
		logger.info("Starting the save of data.");
		FinAccount account = this.finAccDAO.getRecordByPrimaryKey(id);
		List<Invoice> invoices = this.invoiceDAO.getListByKeyandValue("boxMode", id);
		if(invoices!=null && account!=null)
			logger.info("returned with "+invoices.size()+" invoices of the "+account.getName()+ " account");
		ModelAndView mav = new ModelAndView("invoice_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("invoices", invoices);
		mav.getModelMap().put("title_text", "Invoices ");
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
	 * Provides a read-only view for the invoice (to enable its printing)
	 */
	@RequestMapping(value = { "/view-invoice.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView invoiceDisplay(@RequestParam("id") int id, Locale locale, @RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error,HttpSession session) throws Exception {
		logger.info("Fetching the invoice from the database.");
		
	
		
		
		Invoice existingInvoice = this.invoiceDAO.getRecordByPrimaryKey(id);
		
		int a= (Integer) session.getAttribute("finyear");

		Dateselecter ds=new Dateselecter();
		ds.setfinyear(a);
		
		List<Invoice> invoices = this.invoiceDAO.getListByHQLQuery("from Invoice i where i.id="+id+" and i.date > '"+ds.getFinyearStart()+"'  and i.date <   '"+ds.getFinyearEnd()+"' " );

		
		List<Item> itemList = null;
		try {
			logger.info("Fetching items for the invoice.");
			itemList = this.itemDAO.getList();
		} catch (Exception e) {
			logger.error("Error in fetching items for the invoice: "+e.getMessage());
		}
		ModelAndView modelAndView = new ModelAndView("invoice_details");
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

		return invoiceEntryDisplay(status, invoice);
	}
}
