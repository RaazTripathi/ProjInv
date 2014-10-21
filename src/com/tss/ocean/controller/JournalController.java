package com.tss.ocean.controller;

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
import com.tss.ocean.dao.JournalDAO;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IEmployeeCategoryDAO;
import com.tss.ocean.idao.IEmployeesDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.idao.IPurchaseApproverDAO;
import com.tss.ocean.idao.IPurrequisitionDAO;
import com.tss.ocean.idao.IPurrequisitiondtDAO;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.Invoice;
import com.tss.ocean.pojo.Journal;



@Controller
public class JournalController {
	@Autowired
	IInvoiceDAO invoiceDAO;

	@Autowired
	private IPurchaseApproverDAO purchaseApproversDAO;
	@Autowired
	private IPurrequisitionDAO purrequisitionDAO;
@Autowired
JournalDAO journalDao;
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

	
	@RequestMapping(value = { "/addjournal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView revenue(@ModelAttribute("journal") Journal journal) throws Exception {
		logger.info("************************************");
		/*List<Asset> assets = this.assetDAO.getList();
		logger.info("returned with "+assets.size()+" cash invoices");
		
	float	total = 0;
	
		for(Asset a:assets)
		{
			total=total+a.getPrice();
		}*/
		journalDao.insert(journal);
		
				ModelAndView mav = new ModelAndView("journal-list");
		/*mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("assets", assets);
		mav.getModelMap().put("total", total);*/
		return mav;
	}
	
	
	
	
	@RequestMapping(value = { "/journalform.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String addjournalform(@ModelAttribute("journal") Journal journal) throws Exception {
		logger.info("************************************");
		
	
	
		return "add_journal";
	}


	
	@RequestMapping(value = { "/journal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView addjournal(@ModelAttribute("journal") Journal journal) throws Exception {
		logger.info("************************************");
		
	List <Journal> jlist=journalDao.getList();
	
	ModelAndView mv=new ModelAndView("journal-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}	
	
	@RequestMapping(value = { "/debit_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView debit(@ModelAttribute("journal") Journal journal) throws Exception {
		ModelAndView mv=new ModelAndView("debitandcredit");
		mv.getModelMap().put("useFinanceMenus", "true");
		mv.getModelMap().put("type", "0");
		return mv;
	}
	
	@RequestMapping(value = { "/credit_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView credit(@ModelAttribute("journal") Journal journal) throws Exception {
		ModelAndView mv=new ModelAndView("debitandcredit");
		mv.getModelMap().put("useFinanceMenus", "true");
		mv.getModelMap().put("type", "1");
		return mv;
	}
	
	
}
