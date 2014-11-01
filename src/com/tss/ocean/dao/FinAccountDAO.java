package com.tss.ocean.dao;

import java.util.List;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.tss.ocean.idao.IFinAccountDAO;
import com.tss.ocean.pojo.FinAccount;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository("finaccountDao")
public class FinAccountDAO
  extends GenericDAOImpl<FinAccount, Integer>
  implements IFinAccountDAO
{
	/**
	 * Returns all the main accounts from the db
	 * The main accounts will have the type value as 0
	 * All the non-main/sub accounts have account type as the id of their parent
	 * NOTE: The bank and box have nos. 1 & 2
	 */
	public List<FinAccount> getMainAccounts() {

		Session session = getSession();
		List<FinAccount> accounts = null;
		try {
			accounts = session
					.createQuery("from FinAccount f where f.type=0")
					.list();
		} finally {
			if (session.isOpen()) {
				session.close();
			}
		}
		return accounts;
	}
		
	}
	





/* Location:           E:\proj\WEB-INF\classes\
 * Qualified Name:     com.tss.ocean.dao.ItemDAO
 * JD-Core Version:    0.7.1
 */