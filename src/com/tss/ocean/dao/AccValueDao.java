package com.tss.ocean.dao;

import java.util.List;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.tss.ocean.idao.IAccValueDao;
import com.tss.ocean.idao.IAccountsDAO;
import com.tss.ocean.idao.IItemDAO;
import com.tss.ocean.idao.IassetDAO;
import com.tss.ocean.pojo.AccountValue;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.Item;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

@Repository("accValueDao")
public class AccValueDao
  extends GenericDAOImpl<AccountValue, Integer>
  implements IAccValueDao
{
		
	}
	





/* Location:           E:\proj\WEB-INF\classes\
 * Qualified Name:     com.tss.ocean.dao.ItemDAO
 * JD-Core Version:    0.7.1
 */