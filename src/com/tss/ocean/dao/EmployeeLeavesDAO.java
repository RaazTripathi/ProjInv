package com.tss.ocean.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.techshark.hibernate.base.GenericDAOImpl;
import com.techshark.hibernate.util.HibernateUtil;
import com.tss.ocean.idao.IEmployeeLeavesDAO;
import com.tss.ocean.pojo.EmployeeLeaves;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

@Repository("employeeLeavesDAO")
public class EmployeeLeavesDAO extends GenericDAOImpl<EmployeeLeaves, Integer>
		implements IEmployeeLeavesDAO {

	@Override
	public List<EmployeeLeaves> getEmployeeLeaves(int id) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", id);
		String hqlQuery = "FROM EmployeeLeaves e WHERE e.employeeId = :id";
		Query query = HibernateUtil.getCurrentSession().createQuery(hqlQuery);
		for (Map.Entry<String, Object> e : params
				.entrySet()) {
			query.setParameter((String) e.getKey(), e.getValue());
		}
		return query.list();
	}
}

/*
 * Location: E:\proj\WEB-INF\classes\
 * 
 * Qualified Name: com.tss.ocean.dao.EmployeeLeavesDAO
 * 
 * JD-Core Version: 0.7.1
 */