package com.tss.ocean.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.tss.ocean.idao.IFoodItemDAO;
import com.tss.ocean.pojo.FoodItem;
@Repository("FoodItemdao")
public class FoodItemDAO extends GenericDAOImpl<FoodItem, Integer>
		implements IFoodItemDAO {
	
	static final Logger log = LoggerFactory.getLogger(GenericDAOImpl.class);
	
	@Override
	public List<FoodItem> getFoodItemsByMeal(String meal) {
		Session session = getSession();
		List<FoodItem> items = null;
		try {
			items = session
					.createQuery("from FoodItem f where f.type=:meal")
					.setParameter("meal", meal).list();
		} catch (HibernateException e) {
			log.error("error occured in fetching the data: " + e);
		} finally {
			if (session.isOpen()) {
				session.close();
			}
		}
		return items;
	}
}
