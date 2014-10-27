package com.tss.ocean.idao;

import java.util.List;

import com.techshark.hibernate.ibase.GenericDAO;
import com.tss.ocean.pojo.EmployeeLeaves;

public abstract interface IEmployeeLeavesDAO extends
		GenericDAO<EmployeeLeaves, Integer> {

	/**
	 * Provides all the leaves of the specified employee
	 * @param id Employee ID
	 * @return All the known leaves of that employee
	 */
	List<EmployeeLeaves> getEmployeeLeaves(int id);
}

/*
 * Location: C:\Users\Raz\Desktop\InvMgmt\WEB-INF\classes\
 * 
 * Qualified Name: com.tss.ocean.idao.IEmployeeLeavesDAO
 * 
 * JD-Core Version: 0.7.1
 */