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
                   
                    <select id="empid_selector" name="empid" onchange="calculateService()">
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
                 <tr>
                   <td>Joining Date </td>
                   <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                   <td><input type="text" readonly="true" id="joiningDate" path="joiningDate" value="" /></td>
                   </tr> 
                   <tr><td>Current Date</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td> <input type="text" id="popupDatepicker1" path="currentdate" value=''  /></td></tr>
                   
                  <tr>
                  	<td>Salary</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  	<td><input type="text" id="salary" value="0" onchange="reward()" /></td>
                  </tr>
                  <tr>
                    <td>Calculated Rewards</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td><input type="text" id="rewardDisplay" readonly="true" /></td>
                   <tr>
                   <td> <button onclick="reward()">Calculate Rewards</button> </td>
                   <td> <input type="submit"></td></tr>
                   </table>
                 </form>
                  
               </div>
            </div>
            <div class=""></div>
            <div class=""></div>
        </div>
        <!-- /container -->
        <script type="text/javascript">
        function intPart(floatNum){
        	if (floatNum< -0.0000001){
        		 return Math.ceil(floatNum-0.0000001)
        		}
        	return Math.floor(floatNum+0.0000001)
        }
        var delta = 1;
        var jd=0;
        var i=0;
        var l=0;
        var n=0;
        var j=0;
        var k=0;
		function IslToGreg(arg) {
			d = parseInt(arg.HDay)
			m = parseInt(arg.HMonth)
			y = parseInt(arg.HYear)
			//added - delta=1 on jd to comply isna rulling
			jd = intPart((11 * y + 3) / 30) + 354
					* y + 30 * m
					- intPart((m - 1) / 2) + d
					+ 1948440 - 385 - delta
			//arg.JD.value = jd
			//arg.wd.value = weekDay(jd % 7)
			if (jd > 2299160) {
				l = jd + 68569
				n = intPart((4 * l) / 146097)
				l = l
						- intPart((146097 * n + 3) / 4)
				i = intPart((4000 * (l + 1)) / 1461001)
				l = l - intPart((1461 * i) / 4)
						+ 31
				j = intPart((80 * l) / 2447)
				d = l - intPart((2447 * j) / 80)
				l = intPart(j / 11)
				m = j + 2 - 12 * l
				y = 100 * (n - 49) + i + l
			} else {
				j = jd + 1402
				k = intPart((j - 1) / 1461)
				l = j - 1461 * k
				n = intPart((l - 1) / 365)
						- intPart(l / 1461)
				i = l - 365 * n + 30
				j = intPart((80 * i) / 2447)
				d = i - intPart((2447 * j) / 80)
				i = intPart(j / 11)
				m = j + 2 - 12 * i
				y = 4 * k + n + i - 4716
			}

			arg.CDay = d
			arg.CMonth = m
			arg.CYear = y

		}
		</script>
        <script type="text/javascript">
          var empDetails = {};
          <c:forEach var="e" items="${employees}">
            var date=${e.joiningDate};
            empDetails["${e.id}"]=date;
          </c:forEach>
          function calculateService(){
        	  console.log("Populating joining dat for employee id: "+empid);
        	  var empid = document.getElementById('empid_selector').value;
        	  document.getElementById('joiningDate').value=empDetails[empid];
          }
          function reward(){
        	  var joinDate = document.getElementById('joiningDate').value;
        	  var present = document.getElementById('popupDatepicker1').value;
        	  var salary = (parseInt(document.getElementById('salary').value)/2)/12;
        	  //console.log(joinDate+present+salary);
        	  var obj={};
        	  obj.HYear=present.split('/')[0];
        	  obj.HMonth=present.split('/')[1];
        	  obj.HDay=present.split('/')[2];
        	  IslToGreg(obj);
        	  console.log(JSON.stringify(obj));
        	  console.log(obj.CDay+'/'+obj.CMonth+'/'+obj.CYear);
        	  console.log(joinDate);
        	  var difference = (parseInt(obj.CYear)-parseInt(joinDate)-4)*12 + parseInt(obj.CMonth);
        	  console.log(difference+' months difference');
        	  console.log('reward: '+difference*salary);
        	  document.getElementById('rewardDisplay').value = difference*salary;
          }
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
            	calculateService();
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
        
        </script>

    </body>
</html>
