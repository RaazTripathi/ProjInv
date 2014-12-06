package com.tss.ocean.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.dao.FinAccountDAO;
import com.tss.ocean.idao.IFinAccountDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.pojo.FinAccount;
import com.tss.ocean.pojo.Invoice;

@Controller
public class CashierController

{
	@Autowired
	IInvoiceDAO invoiceDAO;
	
	@Autowired
	IFinAccountDAO finaccDao;
	
	
	@RequestMapping(value = { "/cashierHome.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String cashier() {
		return "invoice";

	}

	@RequestMapping(value = { "/breakfast.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView breakfastVoucherEntry() throws Exception {
		
		return mealEntryViewProvider("breakfast");
	}
	@RequestMapping(value = { "/lunch.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView lunchVoucherEntry() throws Exception {
		return mealEntryViewProvider("lunch");
	}
	@RequestMapping(value = { "/dinner.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView dinnerVoucherEntry() throws Exception {
		return mealEntryViewProvider("dinner");
	}
	
	/*
	 * Handles the provided data from the meals entry page
	 */
	@RequestMapping(value = { "/addMealVoucher.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView saveInvoiceData(@ModelAttribute("invoice") @Valid Invoice invoice, BindingResult result, ModelMap model, Locale locale) throws Exception {
		String status="";
			status = "received the invoice data ";
			this.invoiceDAO.insertOrUpdate(invoice);
			System.out.println("Data saved successfully!");
			if(invoice.getMealType()!=null)
				return mealEntryViewProvider(invoice.getMealType(), invoice.getMealType()+" Invoice saved!", invoice);
		
		System.out.println("obj>> " + invoice + " , status: "+status);
		ModelAndView resultView = new ModelAndView("invoice_data_entry");
		resultView.getModelMap().put("invoice", invoice);
		resultView.getModelMap().put("flash", "Saved invoice details");
		return resultView;
	}
	

	ModelAndView mealEntryViewProvider(String mealName){
		return mealEntryViewProvider(mealName, "Enter the details for "+mealName, null);
	}
	/*
	 * Provides a customized form for entry of meal related vouchers.
	 */
	ModelAndView mealEntryViewProvider(String mealName, String message, Invoice invoice){
		if(invoice==null)
			invoice = new Invoice();
		ModelAndView modelAndView = new ModelAndView("meal_entry");
		modelAndView.getModelMap().put("invoice", invoice);
		modelAndView.getModelMap().put("flash", message);
		modelAndView.getModelMap().put("meals", new String[]{"breakfast", "lunch", "dinner"});
		modelAndView.getModelMap().put("mealtype", mealName);
		
		List<FinAccount>bank=finaccDao.getListByKeyandValue("type", 1);
		List<FinAccount>box=finaccDao.getListByKeyandValue("type", 2);
		List<FinAccount> otherMain= finaccDao.getMainAccounts();

		modelAndView.getModelMap().put("types", otherMain);
		modelAndView.getModelMap().put("bank", bank);
		modelAndView.getModelMap().put("box", box);


		
		return modelAndView;		
	}
	
	@RequestMapping(value = { "/getaccountlist.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })

public ModelAndView getaccountlist( @RequestParam("val") int val) throws Exception {
	
		
		System.out.println("HEEEEEEEEEEEEEEEEEEEEE");
		
		List<FinAccount> accountlist =finaccDao.getListByKeyandValue("type", val);



		ModelAndView modelAndView = new ModelAndView("ajaxAccountList");
		modelAndView.getModelMap().put("accList", accountlist);
	
		return modelAndView;
	}
	
	
	
	

}
