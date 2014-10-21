package com.tss.ocean.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.dao.AssetDAO;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IEmployeeCategoryDAO;
import com.tss.ocean.idao.IEmployeesDAO;
import com.tss.ocean.idao.IJournalDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.idao.IPurchaseApproverDAO;
import com.tss.ocean.idao.IPurrequisitionDAO;
import com.tss.ocean.idao.IPurrequisitiondtDAO;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.Invoice;
import com.tss.ocean.pojo.Item;
import com.tss.ocean.pojo.Journal;



@Controller
public class JournalController {
	@Autowired
	private IPurchaseApproverDAO purchaseApproversDAO;
	@Autowired
	private IPurrequisitionDAO purrequisitionDAO;
	@Autowired
	IJournalDAO journalDAO;

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
	private static final Logger logger = LoggerFactory.getLogger(financeMenuControllers.class);

	
	/*@RequestMapping(value = { "/assets.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView revenue(@RequestParam(value="success", required=false) String success, @RequestParam(value="error", required=false) String error, Locale locale) throws Exception {
		logger.info("************************************");
		List<Asset> assets = this.assetDAO.getList();
		logger.info("returned with "+assets.size()+" cash invoices");
		
	float	total = 0;
	
		for(Asset a:assets)
		{
			total=total+a.getPrice();
		}
				ModelAndView mav = new ModelAndView("assets_list");
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("assets", assets);
		mav.getModelMap().put("total", total);
		return mav;
	}
	*/
	
	
	
	@RequestMapping(value = { "/journal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String addassetform(@ModelAttribute("asset") Journal journal) throws Exception {
		logger.info("************************************");
		return "add_assets";
	}


	/*
	 * Journal entry form
	 */
	@RequestMapping(value = { "/journal_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_CASHIER','ROLE_ADMIN')")
	public ModelAndView journalEntryDisplay(String flashMessage) throws Exception {
		logger.info("Initializing the journal entry view.");
		ModelAndView modelAndView = new ModelAndView("journal_data_entry");
		Journal journal = new Journal();
		modelAndView.getModelMap().put("journal", journal);
		modelAndView.getModelMap().put("useFinanceMenus", "true");
		modelAndView.getModelMap().put("flash", flashMessage);
		return modelAndView;
	}
	
	
	/*
	 * Maps to the incoming data from the invoice form
	 */
	@RequestMapping(value = { "/addJournal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView saveJournalData(@ModelAttribute("journal") @Valid Journal journal, BindingResult result, ModelMap model, Locale locale) throws Exception {
		logger.info("Starting the save of data.");
		String status="";
		if(!result.hasErrors()){
			status = "received the data ";
			int i = (Integer)this.journalDAO.insert(journal).intValue();
			logger.info("Data inserted successfully with value: "+i);
		}else{
			status = "Received errors on submitting the invoice form.";
			logger.error(status);
		}

		return journalEntryDisplay(status);
	}
	
	
	
	
}
