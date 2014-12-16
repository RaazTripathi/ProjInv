package com.tss.ocean.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
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
import com.tss.ocean.idao.IFoodItemDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.pojo.FinAccount;
import com.tss.ocean.pojo.FoodItem;
import com.tss.ocean.pojo.Invoice;

@Controller
public class CashierController

{
	@Autowired
	IInvoiceDAO invoiceDAO;
	
	@Autowired
	IFinAccountDAO finaccDao;
	
	@Autowired
	IFoodItemDAO foodItemDAO;
	
	private static final Logger logger = Logger.getLogger(CashierController.class);
	
	@RequestMapping(value = { "/cashierHome.htm" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String cashier() {
		return "invoice";

	}

	@RequestMapping(value = { "/breakfast.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView breakfastVoucherEntry() throws Exception {
		
		return mealEntryViewProvider("Breakfast");
	}
	@RequestMapping(value = { "/lunch.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView lunchVoucherEntry() throws Exception {
		return mealEntryViewProvider("Lunch");
	}
	@RequestMapping(value = { "/dinner.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView dinnerVoucherEntry() throws Exception {
		return mealEntryViewProvider("Dinner");
	}
	
	/*
	 * Handles the provided data from the meals entry page
	 */
	@RequestMapping(value = { "/addMealVoucher.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView saveInvoiceData(@ModelAttribute("invoice") @Valid Invoice invoice, BindingResult result, ModelMap model, Locale locale) throws Exception {
		String status="";
			status = "received the invoice data ";
			this.invoiceDAO.insertOrUpdate(invoice);
			logger.log(Level.DEBUG, "Data saved successfully!");
			if(invoice.getMealType()!=null)
				return mealEntryViewProvider(invoice.getMealType(), invoice.getMealType()+" Invoice saved!", invoice);
		
		logger.log(Level.DEBUG, "obj>> " + invoice + " , status: "+status);
		ModelAndView resultView = new ModelAndView("invoice_data_entry");
		resultView.getModelMap().put("invoice", invoice);
		resultView.getModelMap().put("flash", "Saved invoice details");
		return resultView;
	}
	
	@RequestMapping(value = { "/addFoodItems.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView addAndListFoodItems() throws Exception {
		return addEditFoodItems(new FoodItem());
	}
	@RequestMapping(value = { "/editFoodItems.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView editFoodItems(@RequestParam("id") int id) throws Exception {
		logger.log(Level.DEBUG, "Editing food item with id: "+id);
		FoodItem existingItem = foodItemDAO.getRecordByPrimaryKey(id);
		return addEditFoodItems(existingItem);
	}
	@RequestMapping(value = { "/deleteFoodItems.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView deleteFoodItems(@RequestParam("id") int id) throws Exception {
		logger.log(Level.DEBUG, "Deleting food item with id: "+id);
		FoodItem existingItem = foodItemDAO.getRecordByPrimaryKey(id);
		foodItemDAO.delete(existingItem);
		return new ModelAndView("redirect:addFoodItems.html");
	}

	@RequestMapping(value = { "/addFoodItem.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView saveFoodItem(@ModelAttribute("fooditem") @Valid FoodItem foodItem, BindingResult result, ModelMap model, Locale locale) throws Exception {
		logger.log(Level.DEBUG, "Received foll. food item: "+foodItem.getName()+foodItem.getType()+foodItem.getPrice());
		foodItemDAO.insertOrUpdate(foodItem);
		return new ModelAndView("redirect:addFoodItems.html");
	}
	
	/**
	 * Provides the form for adding/editing FoodItem
	 * As well as provides a list below for all the items.
	 */
	ModelAndView addEditFoodItems(FoodItem foodItem) throws Exception{
		List<FoodItem> existingItems = null;
		ModelAndView itemsPage = new ModelAndView("add_save_fooditem");
		
		logger.log(Level.INFO, "Add and List food items for cashier.");
		logger.log(Level.DEBUG, "Fetching existing food Items");
		existingItems = foodItemDAO.getList();
		logger.log(Level.DEBUG, "Now rendering fooditem list and creation form page");
		
		itemsPage.getModelMap().put("foodItem", foodItem);
		itemsPage.getModelMap().put("saved_items", existingItems);
		return itemsPage;
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
		modelAndView.getModelMap().put("meals", new String[]{"Breakfast", "Lunch", "Dinner"});
		modelAndView.getModelMap().put("mealtype", mealName);
		
		List<FinAccount>bank=finaccDao.getListByKeyandValue("type", 1);
		List<FinAccount>box=finaccDao.getListByKeyandValue("type", 2);
		List<FinAccount> otherMain= finaccDao.getMainAccounts();
		List<FoodItem> foodStuffs = foodItemDAO.getFoodItemsByMeal(mealName);

		modelAndView.getModelMap().put("foodItems", foodStuffs);
		modelAndView.getModelMap().put("types", otherMain);
		modelAndView.getModelMap().put("bank", bank);
		modelAndView.getModelMap().put("box", box);


		
		return modelAndView;		
	}

}
