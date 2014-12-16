<%-- 
    Document   : add_employee_category
    Created on : Aug 24, 2014, 7:28:43 PM
    Author     : sweta
--%>

<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
    </head>
    <body role="document">
        <jsp:include page="headermenu.jsp" />
        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="employee.list" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">

                        <!--<div class="cat-table-title"></div>-->
                        <!-- MUNU -->    
                        <div id='cssmenu'>
                            <ul>
                                <li class='has-sub active'><a href='employee.html'><span><spring:message code="menu.employeemanagement" text="Label value is missing !!!"/></span></a>
                                    <li class=''><a href='access_control.html'><span><spring:message code="menu.empmanagement.acl" text="Label value is missing !!!"/></span></a></li>
                                <li class=''><a href='payslips_list.html'><span><spring:message code="menu.payslips" text="Label value is missing !!!"/></span></a></li>
                                <li class='last'><a href='#'><span><spring:message code="menu.employeeleavemanagement" text="Label value is missing !!!"/></span></a>
                                    <ul style='display: block;'>
                                        <li><a href='leave_types.html'><span><spring:message code="menu.addleavetype" text="Label value is missing !!!"/></span></a></li>
                                        <li class="active"><a href='hr_attendence.html'><span><spring:message code="menu.attendanceregister" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='hr_attendence_report.html'><span><spring:message code="menu.attendancereport" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='hr_employee_report.html'><span><spring:message code="menu.employeereport" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='hr_addleave.html'><span><spring:message code="menu.addleave" text="Label value is missing !!!"/></span></a></li>
                                    </ul>
                                </li>
                         <li class='last'><a href='serviceEnd.html'><span>End the service</span></a></li>
                                
                                
                                
                                <li class=''><a href='#'><span><spring:message code="menu.settings" text="Label value is missing !!!"/></span></a>
                                    <ul style='display: block;'>
                                        <li><a href='employee_category.html'><span><spring:message code="menu.employeecategory" text="Label value is missing !!!"/></span></a></li>
                                        <li class="active"><a href='employee_department.html'><span><spring:message code="menu.employeedepartment" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='payroll_category.html'><span><spring:message code="menu.payrollcategory" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='bank.html'><span><spring:message code="menu.bank" text="Label value is missing !!!"/></span></a></li>
                                    </ul>
                                </li>

                                    <li class='last'><a href='account.html'><span><spring:message code="menu.account" text="Label value is missing !!!"/></span></a></li>

                            </ul>
                            
                            
                        </div>
                        <!-- END MUNU -->    
                    </div>
                </div>
                <div class="col-md-9" align="center" style="">
                   
                   <br>
                   <form action="serviceEndReq.html">
                   <table>
                   <tr>
                   <td> Select Employee </td>
                   
                   <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                   <td>
                   
                    <select name="empid">
                    <c:forEach var="e" items="${employees}">
                    
                    <c:if test="${emp.id ==e.id}">
                                        <option value="${e.id}"  selected="selected"> ${e.firstName} ${e.lastName}</option>
                    
                    </c:if>
                     <c:if test="${emp.id ==null}">
                    <option value="${e.id}"> ${e.firstName} ${e.lastName}</option>
                   </c:if>   </c:forEach>        
                                </select>  
                </td>
                    </tr>
                 <tr><td>Joining Date </td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> <td> 
                    <c:forEach var="e" items="${employees}">
                    
                    
                                            <c:if test="${emp.id ==e.id}">
                                                                                    
                                                <input type="text" id="popupDatepicker" path="joiningDate" value="${e.joiningDate}" />
                                                 </c:if>
               
                                     </c:forEach>  
                                     
                                           
                               
                  </td> </tr> 
                   <tr><td>Current Date</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td> <input type="text" id="popupDatepicker1" path="currentdate" value=''  /></td></tr>
                   
                  
                   <tr><td> <input type="submit"></td></tr>
                   </table>
                             
                   
                   
                    </form>
                    
                  
                   
                  
                   
                  
                   
                   
                    
                    
                    
                    
               </div>
            </div>
            <div class=""></div>
            <div class=""></div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
        <script type="text/javascript">
        </script>
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>
        <script src="js/ajax-bootstrap3.js"></script>
        <script src="js/docs.min.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                $('.row-delete').click(function(eve) {
                    var row = this;
                    eve.preventDefault();
                    $.ajax({
                        url: $(row).attr('href')
                        , success: function(response) {
                            if (response === true) {
                                $(row).closest('tr').remove();
                            }
                        }
                    });
                    return false;
                });
            });
            function printEmployeeReport(){
            	var originalPage = document.body.innerHTML;
            	var detail = document.getElementById("dttable_wrapper");
            	//Remove extra childnodes of the wrapper div
            	detail.removeChild(detail.childNodes[0]);
            	detail.removeChild(detail.childNodes[0]);
            	document.body.innerHTML = detail.innerHTML;
            	window.print();
            	document.body.innerHTML = originalPage;
            }
        </script>
         
       <script type="text/javascript">
        $(function() {
        	  var calendar = $.calendars.instance('islamic');
        	  $('#popupDatepicker').calendarsPicker({calendar: calendar});
        	  $('#popupDatepicker1').calendarsPicker({calendar: calendar});
        	  $('#popupDatepicker2').calendarsPicker({calendar: calendar});
        	  $('#popupDatepicker3').calendarsPicker({calendar: calendar});
        	});
        
        $(function() {
        	$("#popupDatepicker1").datepicker({
        	        dateFormat: "yy-mm-dd"
        	    }).datepicker("setDate", "0");
        	})
        </script>

    </body>
</html>
