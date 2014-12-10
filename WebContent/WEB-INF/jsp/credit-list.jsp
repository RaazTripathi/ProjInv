<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
    </head>
            <jsp:include page="headermenu.jsp" />
    
    <body role="document">
<%--         <jsp:include page="../headermenu.jsp" />
 --%>        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="approve.list.header" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">

                        <!--<div class="cat-table-title"></div>-->
                        <!-- MUNU -->   
                        
                         <div id='cssmenu'>
                        <%@include  file="finance_mgt_menu.jsp" %>
                        </div>
                         
                        <%-- <div id='cssmenu'>
                            <ul>
                                <li class='has-sub active'><a href='#'><span><spring:message code="menu.ITEMS" text="Label value is missing !!!"/></span></a>
                                    <ul style='display: block;'>
                                        <li><a href='item.html'><span><spring:message code="menu.Items" text="Label value is missing !!!"/></span></a></li>
                                        <li class="active"><a href='item_category.html'><span><spring:message code="menu.ItemCategory" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='item_unit.html'><span><spring:message code="menu.ItemUnits" text="Label value is missing !!!"/></span></a></li>
                                    </ul>
                                </li>
                                <li class=''><a href='purchase_order.html'><span><spring:message code="menu.PurchaseOrder" text="Label value is missing !!!"/></span></a></li>
                                <li class=''><a href='purchase_requisition.html'><span><spring:message code="menu.PurchaseRequisition" text="Label value is missing !!!"/></span></a></li>
                                <li class='last'><a href='account.html'><span><spring:message code="menu.account" text="Label value is missing !!!"/></span></a></li>
                            </ul>
                        </div> --%>
                        <!-- END MUNU -->    
                    </div>
                </div>
                <div class="col-md-9">
               
                    <div class="catagory-main-box top-radius">
                        <div class="cat-box-title cat-title-font top-radius">Debit List</div>
                        <spring:message text="Default Text" code="purrequisition.search.placeholder" var="search"/>
                        <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                                <div class="row tb-margin">
                                   
                                     <div class="col-sm-12" align="center">
                                      
                                      <form action="creditlist.html" method="get" >
                                From date     <input name="from" type="text" class="datepicker " style="margin-left:5em"><br><br>
                                      To Date  <input name="to" type="text" class="datepicker " style="margin-left:6em"><br><br>
                                      
                                      <input type="submit" value="Search" style="margin-left:5em"/>
                                      
                                      </form>
                                      
                                        </div>
                                    <div class="col-sm-8">
                                        <!--<div class="form-group visible-sm visible-md visible-lg">
                                            <label class="col-sm-4 col-xs-12 control-label search-text"><spring:message code="purrequisition.search" text="Label value is missing !!!"/></label>
                                            <div class="col-sm-8 col-xs-12">
                                                <input id="filter" class="form-control" type="text"/>
                                            </div>                                            
                                        </div>
                                        <div class="form-group visible-xs">
                                            <div class="col-xs-12">
                                                <input id="filter" placeholder="${search}" class="form-control" type="text"/>
                                            </div>
                                        </div>-->
                                    </div>
                                </div>
                                
                                <c:if test="${journal!=null}">
                                <table id="dttable" class="table table-bordered table-striped"  data-page-size="5">
                                    <thead class="orange-bg border-t">
                                        <tr>
                                          
                                           <th data-hide="phone">
Journal No                                            </th>
                                            
                                            <th data-hide="phone">
Journal No                                            </th>
                                           
                                           <th data-hide="phone">
Price                                             </th>  
                                            <th data-hide="phone">
Remark text                                            </th>
                                                                                      
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <c:forEach var="jn" items="${journal}">
                                            <tr class="rowclick">
                                               <td>${jn.date}  <input type="hidden" name="id" value="${jn.id}" class="hid"></td>  
                                              
                                                <td>${jn.journalNo}</td>                                                
                                               <td>${jn.price}</td>
                                                <td>${jn.remark}</td>
                                                
                                               
                                            </tr>                                        
                                        </c:forEach> 
                                        
                                        <%--  <tr>
                                                <td colspan="">Total</td>
                                              <td colspan=""></td>
                                              
                                              
                                                <td>${totalval}</td>
                                                
                                               
                                            </tr>  --%> 
                                                                               
                                    </tbody>
                                    <!--<tfoot class="hide-if-no-paging">
                                        <tr>
                                            <td colspan="8">
                                                <div class="pagination pagination-centered"></div>
                                            </td>
                                        </tr>
                                    </tfoot>-->
                                </table>
                                </c:if>
                            </div>                            
                        </div>
                    </div>
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
        <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        
        <script type="text/javascript">
        
$(function() {
        	
        	$('.dialog').dialog({
        		autoOpen: false,
        		title: 'Create recept'
        	});
        	
        var	dialoger;
        var hid;
        	
        	$( ".rowclick" ).click(function(){
        		
        		$( "#hiddenid" ).val($(this).find('.hid').val());
        		
        		dialoger=$(this);
        		 
        		$( ".dialog" ).dialog('open');
        	});
        	
        	
        	$('#submitrecptform').click (function(){
        		  var win = window.open(function(){
        			  
        		  });
        		    win.document.write(dialoger.html());
        		    win.print();
        		    win.close();
        		    $('#myfrm').submit();
        		    
        	});
        
        
        
        
        });
        
        
            $(document).ready(function() {
                $('.datepicker').datepicker({dateFormat: 'dd/mm/yy'});

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
        </script>
        
        <div class="dialog" title="Create recept">

<form id="myfrm" action="createRecept.html" >
    
     <input type="hidden" name="id" value="" id="hiddenid">
    
  Inter recept no :  <input type="text" name="receptno" class="form-control"> <br>
    Select date:  <input type="text" name="recptdate" class="datepicker form-control"> 

<input type="button" value="Print" class="btn btn-orange" id="submitrecptform"  >

</form>




</div>
        
        
    </body>
</html>