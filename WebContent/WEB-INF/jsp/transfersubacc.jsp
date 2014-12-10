<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

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
                    <div class="page-title-text"><spring:message code="label.invoice.heading" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">
                       <div id='cssmenu'>
                        	<jsp:include page="finance_mgt_menu.jsp" />
                        
                         </div>
                        <!-- END MUNU -->    
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="catagory-main-box top-radius">
                        <div class="cat-box-title cat-title-font top-radius">
                        	All Assets for Company 
                        </div>
                        
                 <%--        <div class="row tb-margin">
                                        <div class="col-sm-4">
                                          Total money in Box = ${box.value}
                                        </div>

<div class="col-sm-4">
                                          Total money in Bank = ${bank.value}
                                        </div>

                                    </div> --%>
                        <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                                
                                
                                <form action="transferfundtosubacc.html" method="post">
                                
                                
                          
                                
                                
                                
                                
                                
                                
                                 <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      Select main account
	                                    </label>
                                <div class="col-sm-8 col-xs-12">
	                                        <select id="acctype" class="form-control" >
	                                            <option value="2"><spring:message code="label.invoice.boxtype" text="Default Text"/></option>
	                                            <option value="1"><spring:message code="label.invoice.banktype" text="Default Text"/></option>
	                                            <c:if test="${types != null}">
	                                                <c:forEach items="${types}" var="type">
	                                                    <option value="${type.id}">${type.name}</option>
	                                                </c:forEach>
	                                            </c:if>
	                                        </select>
	                                       
	                                                
	                                    </div>
                                </div>
                                
                                 <div id="subdv" class="form-group">
	                                         
	                                    
	                                </div>
                                
                                
                              
                             
                                
                                
                                
                                <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      Select main account
	                                    </label>
                                <div class="col-sm-8 col-xs-12">
	                                        <select id="acctype2" class="form-control" >
	                                            <option value="2"><spring:message code="label.invoice.boxtype" text="Default Text"/></option>
	                                            <option value="1"><spring:message code="label.invoice.banktype" text="Default Text"/></option>
	                                            <c:if test="${types != null}">
	                                                <c:forEach items="${types}" var="type">
	                                                    <option value="${type.id}">${type.name}</option>
	                                                </c:forEach>
	                                            </c:if>
	                                        </select>
	                                       
	                                                
	                                    </div>
                                </div>
                                
                                 <div id="subdv2" class="form-group">
	                                         
	                                    
	                                </div>
                      
                                
                                <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
Amount to transfer	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <input type="text" name="amount" class="form-control" placeholder="amount to transfer"> 
                                       
                                                                                   
                                       
                                       
                                        </div>
                                    </div>
                                
                                
                                <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                     Select Date
	                                    </label>
                                
                                 <div class="col-sm-8 col-xs-12">
	                                        <input id="toDate" type="text" name="date" class="form-control">
	                                       
	                                                
	                                    </div>
                                
                                </div>
                                
                                
                                
                                
                                
                                  <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                     Remark
	                                    </label>
                                
                                 <div class="col-sm-8 col-xs-12">
	                                        <input type="text" name="remark" class="form-control" >
	                                       
	                                                
	                                    </div>
                                
                                </div>
                                
                                
                                
                                  <div class="form-group">
	                                    
                                
                                 <div class="col-sm-8 col-xs-12" align="center" style="margin-top: 5%">
	                                      <input type="submit" value="Transfer">
	                                       
	                                                
	                                    </div>
                                
                                </div>
                                
                                
                                
                                </form>
                                
                                
                                
                                
                                
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
           
            
            
         
            $('#accbank').hide();
            
            $('#accbox').hide(); 
            $('#subdv').hide();
            
            
            $('#acctype').change(function(){
            	
            
            	var val=$('#acctype').val();
            	
            	$.ajax({url:"getaccountlist.html?val="+val,
            		success:function(result){
            			
            			$("#subdv").html(result);
            			$("#subdv").find('.trreq').attr('name','fromacc');
            			$('#subdv').show();
            	  }});
            	
            });
            
            
            
            
            $('#acctype2').change(function(){
            	
                
            	var val=$('#acctype2').val();
            	
            	$.ajax({url:"getaccountlist.html?val="+val,
            		success:function(result){
            			
            			$("#subdv2").html(result);
            			
            			
            			$("#subdv2").find('.trreq').attr('name','toacc');
            			$('#subdv2').show();
            	  }});
            	
            });
            
            
            
        
        });

        
        
        
         
        
        
        
        
        $(document).ready(function() {
        	
        	 
            $("#toDate").datepicker(
                    {dateFormat: 'dd/mm/yy'});
          
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
    </body>
</html>