package com.tss.ocean.idao;

import com.techshark.hibernate.ibase.GenericDAO;
import com.tss.ocean.pojo.EmployeeAttendances;
import com.tss.ocean.pojo.EmployeeLeaveTypes;

import java.util.Date;
import java.util.List;

public abstract interface IEmployeeAttendancesDAO extends
		GenericDAO<EmployeeAttendances, Integer> {
	public abstract List<EmployeeAttendances> getEmployeeAttendanceBetweenDates(
			Date paramDate1, Date paramDate2);

	public abstract List<EmployeeAttendances> getAttendanceForTypes(
			Date fromDate, Date toDate, EmployeeLeaveTypes leaveType);

	public abstract List<EmployeeAttendances> getIndividualEmployeeAttendance(
			Date fromDate, Date toDate, EmployeeLeaveTypes leaveType,
			Integer empId);

	public abstract List<EmployeeAttendances> getAllIndividualAttendances(
			Date fromDate, Date toDate, Integer valueOf);
}

/*
 * Location: C:\Users\Raz\Desktop\InvMgmt\WEB-INF\classes\
 * 
 * Qualified Name: com.tss.ocean.idao.IEmployeeAttendancesDAO
 * 
 * JD-Core Version: 0.7.1
 */