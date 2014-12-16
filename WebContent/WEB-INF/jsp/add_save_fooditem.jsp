<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
      <style>
         .error {
             color: #ff0000;
         }

         .errorblock {
             color: #000;
             background-color: #ffEEEE;
             border: 3px solid #ff0000;
             padding: 8px;
             margin: 16px;
         }
      </style>
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
                    <div class="page-title-text"><spring:message code="label.fooditem.heading" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">
                        <jsp:include page="cashier_menu.jsp" />
                    </div>
                </div>
                
                <div class="col-md-9">
                    <div class="catagory-main-box top-radius">
                        <div class="cat-box-title cat-title-font top-radius">Add different meal items</div>
                        
	                <c:if test="${ flash != null}">
	                    <div class="cat-box-title cat-title-font top-radius">${flash}</div>
	                </c:if>
                        <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                            <form:form action="addFoodItem.html" method="POST" modelAttribute="foodItem">
                                <!-- <form:errors path="*" cssClass="errorblock" element="div" /> -->
                                <form:hidden path="id" />
                                <!--div class="col-sm-8 visible-xs"-->
                                
                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm"><spring:message code="label.fooditem.name" text="Default Text"/></label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:input  type="text" class="form-control" path="name" placeholder="Food Item Name"/>
                                        </div>
                                    </div>
	                                <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.fooditem.type" text="Default Text"/>
	                                    </label>
	                                    <div class="col-sm-8 col-xs-12">
	                                        <form:select id="fooditemtype" class="form-control" path="type">
	                                            <form:option value="Breakfast"><spring:message code="label.fooditem.breakfast" text="Default Text"/></form:option>
	                                            <form:option value="Lunch"><spring:message code="label.fooditem.lunch" text="Default Text"/></form:option>
	                                            <form:option value="Dinner"><spring:message code="label.fooditem.dinner" text="Default Text"/></form:option>
	                                        </form:select>
	                                       
	                                        <form:errors path="type" cssClass="error" />
	                                    </div>
	                                </div>
                                    <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.fooditem.price" text="Default Text"/>
	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:input  type="text" class="form-control" path="price" placeholder="0.00"/>
                                            <form:errors path="price" cssClass="error" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <div class="">
                                        <div class="div-center-xs">
                                            <input type="submit" class="btn btn-orange"  onclick="return submitDetailsForm();" value="Save" />
                                            <button type="button" class="btn btn-orange" onclick="javascript:history.back();">Cancel</button>
                                            <!--button type="button" class="btn btn-orange" onclick="printFormDetails()">Print</button-->
                                        </div>
                                    </div>
                                    </div>
                                <!-- /div -->                                        
                               
                            </form:form>
                                
                            </div>                            
                        </div>
                    </div>
                    
                    <div class="catagory-main-box top-radius">
                    	<div class="cat-box-title cat-title-font top-radius">List of FoodItems</div>
                    	  <table id="dttable" class="table table-bordered table-striped" data-filter="#filter" data-page-size="5">
                             <thead class="orange-bg border-t">
                                 <tr>
                                   <th data-toggle="true">
                                       <spring:message code="label.fooditem.name" text="Label value is missing !!!"/>
                                   </th>
                                   <th data-hide="phone">
                                       <spring:message code="label.fooditem.type" text="Label value is missing !!!"/> 
                                   </th>
                                   <th data-hide="phone">
                                       <spring:message code="label.fooditem.price" text="Label value is missing !!!"/> 
                                   </th>
                                   <th data-toggle="false">
                                   	   <spring:message code="label.fooditem.menu.action" text="Label value is missing !!!"/>
                                   </th>
                               </tr>
                           </thead>
                           <tbody>
                               <c:forEach var="item" items="${saved_items}">
                                   <tr>
                                       <td>${item.name}</td>
                                       <td>${item.type}</td>                                                
                                       <td>${item.price}</td>
                                       <td>
                                           <a href="editFoodItems.html?id=${item.id}" class="btn btn-default btn-sm" type="button"><span class="glyphicon glyphicon-edit"></span>Edit</a>
                                           <a href="deleteFoodItems.html?id=${item.id}" class="btn btn-default btn-sm row-delete" type="button"><span class="glyphicon glyphicon-trash"></span> Delete</a>
                                       </td>
                                   </tr>                                        
                               </c:forEach>
                           </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>
        <script src="js/ajax-bootstrap3.js"></script>
        <script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                $("#fromDate").datepicker({
                    dateFormat: 'yy/mm/dd'
                });
                
                
                
                $('#accbank').hide();
                
                $('#accbox').hide(); 
                $('#subdv').hide();
                
                
                $('#acctype').change(function(){
                	var val=$('#acctype').val();
                	
                	if(val=='true')
                		{
                		$('#subdv').show();
                		 $('#accbox').show();
                		 $('#accbank').hide();
                		
                		}
                	else{
                		$('#subdv').show();
                		
                		 $('#accbox').hide();
                		 $('#accbank').show();
                		
                	}
                	
                });
                
                
                
                
                $("#mealFormDate").val(new Date().getFullYear()
                        + "-"
                        + ("0" + (new Date().getMonth() + 1)).slice(-2)
                        + "-"
                        + ("0" + new Date().getDate()).slice(-2));
                $("#toDate").datepicker(
                        {dateFormat: 'yy/mm/dd'});
                var table = $('#dttable').DataTable();
                $('.row-delete').click(function(eve) {
                    var row = this;
                    eve.preventDefault();
                    $.ajax({
                        url: $(row).attr('href')
                        , success: function(response) {
                            if (response === true) {
                                table.row($(row).closest('tr')).remove().draw(false);
                            }
                        }
                    });
                    return false;
                });
            });
            function submitDetailsForm() {
                return true;
            }
            function printFormDetails(){
            	var originalPage = document.body.innerHTML;
            	var detail = document.getElementById("demo");
            	document.body.innerHTML = detail.innerHTML;
            	window.print();
            	document.body.innerHTML = originalPage;
            }
            $(function() {
           	  var calendar = $.calendars.instance('islamic');
           	  $('#mealFormDate').calendarsPicker({calendar: calendar});
           	  $('#inlineDatepicker').calendarsPicker({calendar: calendar, onSelect: showDate});
           	});

         	function showDate(date) {
         	  alert('The date chosen is ' + date);
         	}
        </script>
    </body>
</html>
