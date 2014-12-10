package com.tss.ocean.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.tss.ocean.dao.AssetDAO;
import com.tss.ocean.dao.CashTransferReqDAO;
import com.tss.ocean.dao.FinAccountDAO;
import com.tss.ocean.dao.ICashTransferReqDAO;
import com.tss.ocean.dao.JournalDAO;
import com.tss.ocean.dto.Dateselecter;
import com.tss.ocean.idao.IAccValueDao;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IEmployeeCategoryDAO;
import com.tss.ocean.idao.IEmployeesDAO;
import com.tss.ocean.idao.IFinRecptinvoiceDAO;
import com.tss.ocean.idao.IInvoiceDAO;
import com.tss.ocean.idao.IPurchaseApproverDAO;
import com.tss.ocean.idao.IPurrequisitionDAO;
import com.tss.ocean.idao.IPurrequisitiondtDAO;
import com.tss.ocean.pojo.AccountValue;
import com.tss.ocean.pojo.CashTransferReq;
import com.tss.ocean.pojo.FinAccount;
import com.tss.ocean.pojo.FinRecptInvoice;
import com.tss.ocean.pojo.Journal;



@Controller
public class FinanceAndJournalController {
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
	@Autowired
	IFinRecptinvoiceDAO finRecptinvoiceDAO;
	@Autowired FinAccountDAO finaccDao;
	@Autowired
	ICashTransferReqDAO cashtransreq;
	

	 @Autowired
		   private IAccValueDao accvalueDao;
	
	
	private static final Logger logger = LoggerFactory.getLogger(financeMenuControllers.class);

	
	@RequestMapping(value = { "/addjournal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public ModelAndView revenue(@ModelAttribute("journal") Journal journal,HttpSession session) throws Exception {
		logger.info("************************************");
		
		int a= (Integer) session.getAttribute("finyear");
		journal.setType("JOURNAL");
		journal.setFinyear(a);
		journalDao.insert(journal);
		List <Journal> jlist=journalDao.getListByKeyandValue("finyear", a);
		
		ModelAndView mv=new ModelAndView("journal-list");
		mv.getModelMap().put("journal", jlist);
		/*mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("assets", assets);
		mav.getModelMap().put("total", total);*/
		return mv;
	}
	
	
	@RequestMapping(value = { "/addDebit.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public String addDebit(@ModelAttribute("journal") Journal journal,HttpSession session) throws Exception {
		logger.info("************************************");
		/*List<Asset> assets = this.assetDAO.getList();
		logger.info("returned with "+assets.size()+" cash invoices");
		
	float	total = 0;
	
		for(Asset a:assets)
		{
			total=total+a.getPrice();
		}*/
	
		int a= (Integer) session.getAttribute("finyear");
System.out.println("mmmmmmmmmmmmmmmmmmmmmmmmmm"+a);
		journal.setType("DEBIT");
		journal.setFinyear(a);
		journalDao.insert(journal);
		return "redirect:debitlist.html";
	}
	
	@RequestMapping(value = { "/addCredit.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.POST })
	public String addCredit(@ModelAttribute("journal") Journal journal,HttpSession session) throws Exception {
		logger.info("************************************");
		/*List<Asset> assets = this.assetDAO.getList();
		logger.info("returned with "+assets.size()+" cash invoices");
		
	float	total = 0;
	
		for(Asset a:assets)
		{
			total=total+a.getPrice();
		}*/
		int a= (Integer) session.getAttribute("finyear");
journal.setFinyear(a);
		journal.setType("CREDIT");
		journalDao.insert(journal);
		/*List <Journal> jlist=journalDao.getListByKeyandValue("type", "CREDIT");
		
		ModelAndView mv=new ModelAndView("credit-list");
		mv.getModelMap().put("journal", jlist);
		mav.getModelMap().put("useFinanceMenus", "true");
		mav.getModelMap().put("assets", assets);
		mav.getModelMap().put("total", total);
		return mv;*/
	
	return "redirect:creditlist.html";
	
	}
	
	
	
	
	
	
	@RequestMapping(value = { "/journalform.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public String addjournalform(@ModelAttribute("journal") Journal journal) throws Exception {
		logger.info("************************************");
		
	
	
		return "add_journal";
	}


	
	@RequestMapping(value = { "/journal.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView addjournal(@ModelAttribute("journal") Journal journal , HttpSession session) throws Exception {
		logger.info("************************************");
		int a= (Integer) session.getAttribute("finyear");

	List <Journal> jlist=journalDao.getListByHQLQuery("from Journal where type='JOURNAL' and finyear="+a);
	ModelAndView mv=new ModelAndView("journal-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}	
	
	@RequestMapping(value = { "/debitlist.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView debitlist(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		
		int a= (Integer) session.getAttribute("finyear");

		
		System.out.println(ds.getFormattedfrom() +"_______"+ds.getFormattedto());
	List <Journal> jlist=journalDao.getListByHQLQuery("from Journal where date >  '"+ds.getFormattedfrom()+"' and  date < '"+ds.getFormattedto()+"' and type='DEBIT' and finyear="+a);
	
	ModelAndView mv=new ModelAndView("debit-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}	
		
	
	
	
	@RequestMapping(value = { "/creditlist.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView creditlist(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		int a= (Integer) session.getAttribute("finyear");

	List <Journal> jlist=journalDao.getListByHQLQuery("from Journal where date >  '"+ds.getFormattedfrom()+"' and  date < '"+ds.getFormattedto()+"' and type='CREDIT' and finyear="+a);
	
	ModelAndView mv=new ModelAndView("credit-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = { "/createRecept.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView createRecept(@ModelAttribute("id") int [] id,@RequestParam("receptno")int receptno  ,HttpSession session ) throws Exception {
		logger.info("************************************");
		FinRecptInvoice finv =new FinRecptInvoice();

		for(int i=0;i<id.length ; i++)
	{
		
		
	Journal j=journalDao.getRecordByKeyandValue("id",id[i] );
	finv.setDate(j.getDate());
	finv.setBorb(j.getBorb());
/*	finv.setJournalNo(j.getJournalNo());
*/	finv.setPrice(finv.getPrice()+j.getPrice());
	finv.setRemark(finv.getRemark()+", "+j.getRemark());
	finv.setType(j.getType());
	finv.setSubacctype(j.getSubacctype());
	int a= (Integer) session.getAttribute("finyear");

	finv.setFinyear(a);
	finv.setId(0);
	
	
	}
	finRecptinvoiceDAO.insert(finv);
	
	int a= (Integer) session.getAttribute("finyear");

	ModelAndView mv=new ModelAndView("debit-list");

	List <FinRecptInvoice> jlist=journalDao.getListByHQLQuery("from FinRecptInvoice where type="+finv.getType()+"  and finyear="+a);
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}
	
	@RequestMapping(value = { "/financeApprovalreceptlist.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView financeApprovalreceptlist(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		int a= (Integer) session.getAttribute("finyear"); 
		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByHQLQuery("from FinRecptInvoice where type='DEBIT'  and finyear="+a);;
	
		
/*		List <Journal> jlist=journalDao.getListByHQLQuery("from Journal where type='DEBIT'  and finyear="+a);
*/
	ModelAndView mv=new ModelAndView("debit-recept-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}
	
	
	@RequestMapping(value = { "/financeApprovalreceptlistcredit.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView financeApprovalreceptlistcredit(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		int a= (Integer) session.getAttribute("finyear"); 

/*		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByKeyandValue("type","CREDIT");
*/				List <Journal> jlist=journalDao.getListByHQLQuery("from Journal where type='DEBIT'  and finyear="+a);

	ModelAndView mv=new ModelAndView("credit-recept-list");
	mv.getModelMap().put("journal", jlist);
	
		return mv;
		
		
	}
	
	
	
	@RequestMapping(value = { "/finapprovelevel1.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_ACCMANAGER')")
	public ModelAndView finapprovelevel1(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		
		int a= (Integer) session.getAttribute("finyear"); 
		
		
		List <CashTransferReq> ctr	= cashtransreq.getListByKeyandValue("finyear", a);
		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByHQLQuery(" from FinRecptInvoice where apelevel1=1  and  finyear="+a);
	
	ModelAndView mv=new ModelAndView("approve-level1recept-list");
	mv.getModelMap().put("journal", jlist);
	mv.getModelMap().put("ctrl", ctr);

		return mv;
		
		
	}
	
	@RequestMapping(value = { "/finapprovelevel2.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_CLUBINC')")
	public ModelAndView finapprovelevel2(@ModelAttribute("dataselecter") Dateselecter ds, HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		int a= (Integer) session.getAttribute("finyear"); 
		
		List <CashTransferReq> ctr	= cashtransreq.getListByHQLQuery("from CashTransferReq where  approvelevel1=1 ant finyear="+a);
		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByHQLQuery(" from FinRecptInvoice where apelevel2=1 and finyear="+a);
	
	ModelAndView mv=new ModelAndView("approve-level2recept-list");
	mv.getModelMap().put("journal", jlist);
	mv.getModelMap().put("ctrl", ctr);
		return mv;
		
		
	}
	@RequestMapping(value = { "/finapprovelevel3.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_FININC')")
	public ModelAndView finapprovelevel3(@ModelAttribute("dataselecter") Dateselecter ds,HttpSession session) throws Exception {
		logger.info("************************************");
		System.out.println(ds.getFrom()+"---------------------------------");
		int a= (Integer) session.getAttribute("finyear"); 

		List <CashTransferReq> ctr	= cashtransreq.getListByHQLQuery("from CashTransferReq where  approvelevel2=1 ant finyear="+a);
		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByHQLQuery(" from FinRecptInvoice where apelevel3=1 and finyear="+a);

		/*List <CashTransferReq> ctr	= cashtransreq.getListByKeyandValue("approvelevel2", 1);

		List <FinRecptInvoice> jlist=finRecptinvoiceDAO.getListByKeyandValue("apelevel3",1);
*/	
	ModelAndView mv=new ModelAndView("approve-level3recept-list");
	mv.getModelMap().put("journal", jlist);
	mv.getModelMap().put("ctrl", ctr);

		return mv;
		
		
	}
	
	@RequestMapping(value = { "/updateapprove.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_FININC','ROLE_CLUBINC','ROLE_ACCMANAGER')")
	public String updateapprove(@RequestParam("level") int level, @RequestParam("id") int id) throws Exception {
		logger.info("************************************");
		
		FinRecptInvoice finr =finRecptinvoiceDAO.getRecordByPrimaryKey(id);
	String vw="";
		
		switch (level) {
		case 1:  finr.setApelevel1(1);
			vw="redirect:financeApprovalreceptlist.html";
			break;
		case 2:  finr.setApelevel2(1);
		vw="redirect:finapprovelevel1.html";
		break;
		case 3:  finr.setApelevel3(1);
		vw="redirect:finapprovelevel2.html";

		break;case 4:  finr.setApelevel4(1);
		vw="redirect:finapprovelevel3.html";

		break;
		default:
			break;
		}
		
		
		
		finRecptinvoiceDAO.update(finr);
		
		
	
		return vw;
		
		
	}
	
	
	@RequestMapping(value = { "/approvetransfer.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_FININC','ROLE_CLUBINC','ROLE_ACCMANAGER')")
	public String approvetransfer(@RequestParam("level") int level, @RequestParam("id") int id) throws Exception {
		logger.info("************************************");
		
		CashTransferReq finr =cashtransreq.getRecordByPrimaryKey(id);
	String vw="";
		
		switch (level) {
		case 1:  finr.setApprovelevel1(1);
		vw="redirect:finapprovelevel1.html";
			break;
		case 2:  finr.setApprovelevel2(1);
		vw="redirect:finapprovelevel2.html";
		break;
		case 3:  finr.setApprovelevel3(1);
		
		AccountValue boxValue = this.accvalueDao.getRecordByKeyandValue("accid", 1);
		AccountValue bankValue = this.accvalueDao.getRecordByKeyandValue("accid", 2);

		
		
		
		
	boxValue.setValue(boxValue.getValue()-finr.getAmount());
	bankValue.setValue(bankValue.getValue()+finr.getAmount());
	this.accvalueDao.update(boxValue);
	this.accvalueDao.update(bankValue);
		vw="redirect:finapprovelevel3.html";

		
		break;
		default:
			break;
		}
		
		
		
		cashtransreq.update(finr);
		
		
	
		return vw;
		
		
	}
	

	
	
	
	
	
	
	
	@RequestMapping(value = { "/debit_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView debit(@ModelAttribute("journal") Journal journal) throws Exception {
		ModelAndView mv=new ModelAndView("debitandcredit");
		List<FinAccount> otherMain= finaccDao.getMainAccounts();

		mv.getModelMap().put("types", otherMain);
		mv.getModelMap().put("flash", "Enter the debit voucher entries");
		mv.getModelMap().put("useFinanceMenus", "true");
		mv.getModelMap().put("type", "0");
		return mv;
	}
	
	@RequestMapping(value = { "/credit_entry.html" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public ModelAndView credit(@ModelAttribute("journal") Journal journal) throws Exception {
		ModelAndView mv=new ModelAndView("add-credit");
		List<FinAccount> otherMain= finaccDao.getMainAccounts();

		mv.getModelMap().put("types", otherMain);
		mv.getModelMap().put("flash", "Enter the credit voucher entries");
		mv.getModelMap().put("useFinanceMenus", "true");
		mv.getModelMap().put("type", "1");
		return mv;
	}
	
	
}
