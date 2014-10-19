package com.tss.ocean.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.techshark.hibernate.ibase.GenericDAO;
import com.tss.ocean.idao.IBankDAO;
import com.tss.ocean.idao.IBorrowDAO;
import com.tss.ocean.pojo.Asset;
import com.tss.ocean.pojo.Bank;
import com.tss.ocean.pojo.Borrow;
import com.tss.ocean.pojo.Item;
@Repository("borrowDao")
public class  BorrowDAO  extends GenericDAOImpl<Borrow, Integer>
implements IBorrowDAO
{
	

}


/* Location:           C:\Users\Raz\Desktop\InvMgmt\WEB-INF\classes\
 * Qualified Name:     com.tss.ocean.idao.IItemDAO
 * JD-Core Version:    0.7.1
 */